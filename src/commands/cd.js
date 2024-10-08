import fs from "fs/promises";
import createError from "../helpers/createError.js";
import path from "path";

export default async function cd(args) {
  if (args.length > 1 || args.length === 0) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const [dir] = args;

  const targetDir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir);

  try {
    await fs.access(targetDir);
  } catch (err) {
    createError(err);
  }

  process.chdir(targetDir);
}