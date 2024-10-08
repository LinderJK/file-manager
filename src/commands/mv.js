import path from "path";
import fs from "fs/promises";
import { createReadStream, createWriteStream } from "fs";
import createError from "../helpers/createError.js";

export default async function move(args) {
  if (args.length !== 2) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const [from, to] = args;

   let fileName = path.basename(from);
   let fromPath = path.resolve(from);
   let toPath = path.resolve(to, fileName);

  if (fromPath === toPath) {
    return;
  }

     try {
       await fs.access(from, fs.constants.R_OK);
     } catch (err) {
       createError(
         new Error(`Operation failed: Source file does not exist: ${fromPath}`)
       );
       return;
     }

     try {
       await fs.access(to, fs.constants.W_OK);
     } catch (err) {
       createError(
         new Error(`Operation failed: Cannot write to target directory: ${to}`)
       );
       return;
     }
  
  try {
    const rs = createReadStream(fromPath);
    const ws = createWriteStream(toPath);

    rs.on("error", (err) =>
      console.error("Operation failed: Error reading file:", err.message)
    );
    ws.on("error", (err) =>
      console.error("Operation failed: Error writing file:", err.message)
    );

    rs.pipe(ws).on("finish", async() => {
      await fs.unlink(fromPath);
      console.log(`File moved successfully!`);
    })
  } catch (err) {
    createError(err);
  }
}