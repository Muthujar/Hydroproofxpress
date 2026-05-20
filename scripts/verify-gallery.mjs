/**
 * Ensures every path in src/constants/gallery.ts exists under public/.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const galleryTs = fs.readFileSync(
  path.join(root, "src/constants/gallery.ts"),
  "utf8"
);
const srcs = [...galleryTs.matchAll(/src:\s*"(\/gallery\/[^"]+)"/g)].map((m) => m[1]);

let missing = 0;
for (const src of srcs) {
  const file = path.join(root, "public", src.replace(/^\//, ""));
  if (!fs.existsSync(file)) {
    console.error(`Missing: ${file} (expected for ${src})`);
    missing++;
  }
}

if (missing > 0) {
  console.error(`${missing} gallery image(s) missing.`);
  process.exit(1);
}

console.log(`OK — ${srcs.length} gallery images found in public/gallery/`);
