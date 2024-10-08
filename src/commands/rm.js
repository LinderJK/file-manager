import fs from "fs/promises";
import path from "path";
import createError from "../helpers/createError.js";

export default async function remove(args) {
  if (args.length === 0) {
    console.log("Invalid input: wrong argument type.");
  }

  const dir = args.join(' ');
  const normalizedPath = path.normalize(dir);
  const pathToFile = path.resolve(normalizedPath);
  try {
    await fs.access(pathToFile);
    await fs.unlink(pathToFile);
    console.log(`File '${pathToFile}' removed successfully!`);
  } catch (err) {
    createError(err);
  }
}
