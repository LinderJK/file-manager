import path from "path";
import fs from "fs/promises";
import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import createError from "../helpers/createError.js";

export default async function decompress(args) {
  if (args.length < 2) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const inputPath = path.normalize(args[0]);
  const outputPath = path.normalize(args[1]);
  const fileName = path.basename(inputPath, ".br");
  const filePath = path.join(outputPath, fileName);

  try {
    await fs.access(inputPath);

    const unzip = createBrotliDecompress();
    const rs = createReadStream(inputPath);
    const ws = createWriteStream(filePath);

    rs.pipe(unzip).pipe(ws);

    ws.on("finish", () => {
      console.log(`File '${inputPath}' decompressed successfully!`);
    });
    ws.on("error", (err) => {
      console.error(`Error during decompression: ${err.message}`);
    });
  } catch (err) {
    createError(err);
  }
}
