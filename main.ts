// The Absurd Clause Contest — entry program (Node 22+, stdlib only).
// Writes one original absurd terms-of-service clause to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CLAUSE =
  "By using the Service, you grant us a non-exclusive licence to your shadow, " +
  "which may be reproduced, sublicensed, or sold to third parties in silhouette form.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Guard: the gate requires 1-200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an entry that could never be judged.
if ([...CLAUSE].length === 0 || [...CLAUSE].length > 200 || CLAUSE.trim().length === 0) {
  throw new Error("Clause violates the 1-200 character gate.");
}
if (CLAUSE.includes("\n")) {
  throw new Error("Clause must be a single line.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), CLAUSE, "utf8");
