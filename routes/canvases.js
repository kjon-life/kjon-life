const crypto = require('crypto');
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// This repo is public, so canvases are committed encrypted (see bin/seal-canvas.js)
// and decrypted into memory here, once, at startup. Nothing readable touches the disk.
const canvasesDir = path.join(__dirname, '..', 'canvases');
const pages = {};

function open(file, key) {
  const sealed = fs.readFileSync(file);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, sealed.subarray(0, 12));
  decipher.setAuthTag(sealed.subarray(12, 28));
  return Buffer.concat([decipher.update(sealed.subarray(28)), decipher.final()]);
}

const key = Buffer.from(process.env.CANVAS_KEY || '', 'hex');
fs.readdirSync(canvasesDir).forEach(function(name) {
  const file = path.join(canvasesDir, name, 'index.html.enc');
  if (!fs.existsSync(file)) return;
  try {
    pages[name] = open(file, key);
  } catch (err) {
    // A missing or wrong CANVAS_KEY: the page answers 404 and the reason is in the log.
    console.error('canvases: could not decrypt ' + name + ' (' + err.message + ')');
  }
});

function sameText(a, b) {
  const left = crypto.createHash('sha256').update(a).digest();
  const right = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(left, right);
}

// Unlisted: tell search engines to stay away, on every response including the 401.
router.use(function(req, res, next) {
  res.set('X-Robots-Tag', 'noindex, nofollow');
  res.set('Cache-Control', 'private, no-store');
  next();
});

// HTTP Basic auth. Any username; the password is the CANVAS_PASSWORD secret.
// With no secret set, nobody gets in.
router.use(function(req, res, next) {
  const expected = process.env.CANVAS_PASSWORD || '';
  const header = req.headers.authorization || '';
  const encoded = header.startsWith('Basic ') ? header.slice(6) : '';
  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  const given = decoded.slice(decoded.indexOf(':') + 1);

  if (expected && sameText(given, expected)) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="kjon.life canvases", charset="UTF-8"');
  res.status(401).send('Password required.');
});

// A canvas is served at /canvases/<name>/ so its relative links resolve; the bare path redirects there.
router.get('/:name', function(req, res, next) {
  if (!Object.hasOwn(pages, req.params.name)) return next();
  if (!req.path.endsWith('/')) return res.redirect(301, req.baseUrl + '/' + req.params.name + '/');
  res.type('html').send(pages[req.params.name]);
});

module.exports = router;
