import path from "path";

export default async function goUp(args) {
  if (args.length > 0) {
    console.log("Invalid input: command requires no arguments.");
    return;
  }
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);

  if (currentDir === parentDir) {
    console.log("You are already in the root directory.");
    return;
  }

  process.chdir(parentDir);
  console.log(`Current directory changed to: '${process.cwd()}'`);
}