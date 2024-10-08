import { createReadStream } from "fs";
import fs from "fs/promises";
import createError from "../helpers/createError.js";

export default async function cat(args) {
  if (args.length > 1 || args.length === 0) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const filePath = args[0];

  try {
      await fs.access(filePath);
  } catch (err) {
      createError(err);
  }

  const fileContent = createReadStream(filePath, "utf-8");
  fileContent.on("error", (err) => {
    console.error(`Operation failed: Error reading file: ${err.message}`);
  });
  fileContent.pipe(process.stdout);
}