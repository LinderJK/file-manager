import path from "path";
import { createReadStream } from "fs";
import { createHash } from "crypto";
import createError from "../helpers/createError.js";
import fs from "fs/promises";

export default async function hash(args) {
  if (args.length === 0) {
    console.error("Invalid input: wrong argument type.");
    return;
  }

  const dir = args.join(" ");
  const normalizedPath = path.normalize(dir);
  const pathToFile = path.resolve(normalizedPath);

  try {
    await fs.access(pathToFile);
    const hash = createHash("sha256");
    const stream = createReadStream(pathToFile);
    stream.on("error", (err) => {
      console.error(`Operation failed: ${err.message}`);
    });
    stream.pipe(hash);
    hash.on("finish", () => {
      process.stdout.write(hash.read().toString("hex") + "\n");
    });
  } catch (err) {
    createError(err);
  }
}
