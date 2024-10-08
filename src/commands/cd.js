import fs from "fs/promises";
import createError from "../helpers/createError.js";
import path from "path";

export default async function cd(args) {
  if (args.length === 0) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const dir = args.join(" ");
  const normalizedPath = path.normalize(dir);

  const targetDir = path.isAbsolute(normalizedPath)
    ? normalizedPath
    : path.join(process.cwd(), normalizedPath);

  try {
    await fs.access(targetDir);
    process.chdir(targetDir);
  } catch (err) {
    console.log("Invalid input: directory not found.");
  }
}
