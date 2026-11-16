#!/usr/bin/env node
// Encrypts a canvas page so it can be committed to this public repo.
//
//   node bin/seal-canvas.js <source.html> <name>
//
// Writes canvases/<name>/index.html.enc, which routes/canvases.js decrypts at startup
// and serves at /canvases/<name>/. Run it again whenever the source page changes.
//
// The key is CANVAS_KEY (64 hex characters). When that is not set, the key is read from
// ~/.config/kjon-life/canvas.key, and created there on first use. The same value must be
// set as the CANVAS_KEY secret on Fly.
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');

const [source, name] = process.argv.slice(2);
if (!source || !name) {
  console.error('usage: node bin/seal-canvas.js <source.html> <name>');
  process.exit(1);
}

const keyFile = path.join(os.homedir(), '.config', 'kjon-life', 'canvas.key');

function readKey() {
  if (process.env.CANVAS_KEY) return process.env.CANVAS_KEY.trim();
  if (!fs.existsSync(keyFile)) {
    fs.mkdirSync(path.dirname(keyFile), { recursive: true });
    fs.writeFileSync(keyFile, crypto.randomBytes(32).toString('hex') + '\n', { mode: 0o600 });
    console.log('created a new key at ' + keyFile);
  }
  return fs.readFileSync(keyFile, 'utf8').trim();
}

const key = Buffer.from(readKey(), 'hex');
if (key.length !== 32) {
  console.error('the key must be 64 hex characters');
  process.exit(1);
}

// File layout: 12-byte iv, 16-byte auth tag, then the ciphertext (AES-256-GCM).
const iv = crypto.randomBytes(12);
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const sealed = Buffer.concat([cipher.update(fs.readFileSync(source)), cipher.final()]);

const out = path.join(__dirname, '..', 'canvases', name, 'index.html.enc');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, Buffer.concat([iv, cipher.getAuthTag(), sealed]));
console.log('wrote ' + path.relative(process.cwd(), out));
