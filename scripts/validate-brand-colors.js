const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const scssDir = path.join(root, 'src', 'scss');
const variablesFile = path.join(scssDir, 'base', '_variables.scss');

if (!fs.existsSync(variablesFile)) {
  console.error('Unable to find base/_variables.scss');
  process.exit(1);
}

const variablesContent = fs.readFileSync(variablesFile, 'utf8');
const mapMatch = /\$brand-colors\s*:\s*\(([\s\S]*?)\);/.exec(variablesContent);

if (!mapMatch) {
  console.error('No $brand-colors map found in base/_variables.scss');
  process.exit(1);
}

const allowedColors = new Set();
const allowedRegex = /#([0-9a-fA-F]{3,6})/g;
let match;

while ((match = allowedRegex.exec(mapMatch[1]))) {
  allowedColors.add(`#${match[1].toLowerCase()}`);
}

const skipFiles = [
  variablesFile,
  path.join(scssDir, 'pages', '_v-0-0-3.scss'),
  path.join(scssDir, 'pages', '_error.scss')
];

const violations = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'vendors' || entry.name === 'public') continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!fullPath.endsWith('.scss')) continue;
    if (skipFiles.some((skip) => skip === fullPath)) continue;

    const relativePath = path.relative(root, fullPath);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const lines = fileContent.split(/\r?\n/);

    lines.forEach((line, index) => {
      const regex = /#([0-9a-fA-F]{3,6})\b/g;
      let lineMatch;

      while ((lineMatch = regex.exec(line))) {
        const color = `#${lineMatch[1].toLowerCase()}`;
        if (!allowedColors.has(color)) {
          violations.push({
            file: relativePath,
            line: index + 1,
            value: color,
            snippet: line.trim()
          });
        }
      }
    });
  }
}

walk(scssDir);

if (violations.length) {
  console.error('Brand color contract violations detected:');
  violations.forEach((violation) => {
    console.error(
      `${violation.file}:${violation.line} — ${violation.value} (${violation.snippet})`
    );
  });
  console.error('\nUse `brand-color()` or extend $brand-colors in base/_variables.scss.');
  process.exit(1);
}

console.log('Brand color contract validation passed.');

