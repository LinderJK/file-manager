import fs from "fs/promises";
export default async function ls(args) {
  if (args.length > 0) {
    console.log("Invalid input: command requires no arguments.");
    return;
  }
  const currentDir = process.cwd();
  const files = await fs.readdir(currentDir);
  console.log(files[0], 'debug!!!');

  console.log(files.join(" "));
}
