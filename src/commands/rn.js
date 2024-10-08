import path from "path";
import fs from "fs/promises";
import createError from "../helpers/createError.js";

export default async function rename(args) {
  console.log(args, args.length);
  if (args.length < 2) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const newFileName = args.pop();
  const filePath = path.normalize(args.join(" "));

  const directory = path.dirname(filePath);
  const newFilePath = path.join(directory, newFileName);

  try {
    await fs.access(filePath);
    await fs.rename(filePath, newFilePath);
  } catch (err) {
    createError(err);
  }
}
