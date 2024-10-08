import path from "path";
import { createReadStream, createWriteStream } from "fs";
import fs from "fs/promises";
import createError from "../helpers/createError.js";
export default async function copy(args) {
  if (args.length !== 2) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const [from, to] = args;

  let fileName = path.basename(from);
  let fromPath = path.resolve(from);
  let toPath = path.resolve(to, fileName);
  // console.log(fromPath, '\n', toPath, '\n', fileName);

  if (fromPath === toPath) {
    const name = fileName.split(".")[0] += "(copy)";
    fileName = `${name}.${fileName.split(".")[1]}`;
    toPath = path.resolve(to, fileName);
  }

   try {
     await fs.access(fromPath, fs.constants.R_OK);
   } catch (err) {
     createError(new Error(`Source file does not exist: ${fromPath}`));
     return;
   }

   try {
     await fs.access(to, fs.constants.W_OK);
   } catch (err) {
     createError(new Error(`Cannot write to target directory: ${to}`));
     return;
   }

  const rs = createReadStream(fromPath);
  const ws = createWriteStream(toPath);

  rs.on("error", (err) => console.error("Error reading file:", err.message));
  ws.on("error", (err) => console.error("Error writing file:", err.message));

  rs.pipe(ws).on("finish", () => {
    console.log(`File copied successfully!`);
  });
}