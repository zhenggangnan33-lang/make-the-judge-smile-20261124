import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 7:12 this morning the bus driver held the door while my neighbour sprinted down the street in slippers, and all eight of us pretended not to cheer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the entry line byte-for-byte");
}
console.log(`Wrote ${back.length} characters to ${outPath} — one line, under the 200-character limit.`);
