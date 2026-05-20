/**
 * Copies src/app/icon.png to other favicon paths — no resize, zoom, or compression.
 * Replace icon.png, then run: npm run favicons
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "src/app/icon.png");

if (!fs.existsSync(source)) {
  console.error("Missing src/app/icon.png — paste your 1:1 icon there first.");
  process.exit(1);
}

const targets = [
  path.join(root, "public/logo-icon.png"),
  path.join(root, "src/app/apple-icon.png"),
  path.join(root, "public/favicon-32.png"),
];

for (const target of targets) {
  fs.copyFileSync(source, target);
  console.log(`Copied → ${path.relative(root, target)}`);
}

console.log("Favicon assets copied as-is from src/app/icon.png");
