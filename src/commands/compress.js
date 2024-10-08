import path from "path";
import fs from "fs/promises";
import { createBrotliCompress } from "zlib";
import createError from "../helpers/createError.js";
import { createReadStream, createWriteStream } from "fs";

export default async function compress(args) {
  if (args.length < 2) {
    console.error("Invalid input: wrong argument type.");
    return;
  }

  const [inputPath, outputPath] = args.map((arg) => path.normalize(arg));

  try {
    await fs.access(inputPath);
    const gzip = createBrotliCompress();
    const rs = createReadStream(inputPath);
    const ws = createWriteStream(outputPath);
    rs.pipe(gzip).pipe(ws);

    ws.on("finish", () => {
      console.log(`File '${inputPath}' compressed successfully!`);
    });
    ws.on("error", (err) => {
      console.error(`Error during compression: ${err.message}`);
    });
  } catch (err) {
    createError(err);
  }
}
