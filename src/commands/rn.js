import path from "path";
import fs from "fs/promises";
import createError from "../helpers/createError.js";


export default async function rename(args) {
  if (args.length !== 2) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const [filePath, newFileName] = args;
  const directory = path.dirname(filePath);
  const newFilePath = path.join(directory, newFileName);

  try {
    await fs.access(filePath);
    await fs.rename(filePath, newFilePath);
    console.log(`File renamed successfully!`);
  } catch (err) {
    createError(err);
  } 

}