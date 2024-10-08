import path from "path";

export default async function goUp() {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);

  if (currentDir === parentDir) {
    console.log("You are already in the root directory.");
    return;
  }

  process.chdir(parentDir);
  console.log(`Current directory changed to: '${process.cwd()}'`);
}