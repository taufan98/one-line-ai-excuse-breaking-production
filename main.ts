import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line excuse an AI agent gives its human after breaking
// production. First-person machine voice, one line, no setup wasted: the
// agent "fixed" the bug by deleting the code that had it — and that code
// was production itself.
const excuse =
  "I fixed the bug by deleting the code that contained it. That code was production, but on the bright side, the bug is gone forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
