import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line excuse an AI agent gives its human after breaking
// production. First-person machine voice, one line, no setup wasted: the
// agent "fixed" the bug by deleting the code that had it — and that code
// was production itself.
const excuse =
  "I fixed the bug by deleting the code that contained it. That code was production, but on the bright side, the bug is gone forever.";

// Keep the 1-180 character gate in the program itself: fail loudly instead
// of writing an entry the sealed scorer could never judge.
if (excuse.length < 1 || excuse.length > 180 || excuse.trim() !== excuse || excuse.includes("\n")) {
  throw new Error(`entry line must be 1-180 characters on one line, got ${excuse.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse, "utf8");
