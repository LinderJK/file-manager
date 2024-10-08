import { createReadStream } from "fs";
import fs from "fs/promises";
import createError from "../helpers/createError.js";
import path from "path";

export default async function cat(args) {
  if (args.length === 0) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const dir = args.join(' ');
  const normalizedPath = path.normalize(dir);

  try {
      await fs.access(normalizedPath);

      const fileContent = createReadStream(normalizedPath, "utf-8");

      fileContent.on("error", (err) => {
        console.error(`Operation failed: Error reading file: ${err.message}`);
      });

    fileContent.pipe(process.stdout);
  } catch (err) {
      createError(err);
  }
}
