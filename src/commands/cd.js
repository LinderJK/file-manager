import fs from "fs/promises";
import createError from "../helpers/createError.js";
import path from "path";

export default async function cd(args) {
  const [dir] = args;

  if (!dir) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const targetDir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir);

  try {
    await fs.access(targetDir);
  } catch (err) {
    createError(err);
  }

  process.chdir(targetDir);
}