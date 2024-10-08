import fs from "fs/promises";
import path from "path";
export default async function ls(args, useTab = false) {
  if (args.length > 0) {
    console.log("Invalid input: command requires no arguments.");
    return;
  }
  const currentDir = process.cwd();
  const files = await fs.readdir(currentDir);
  const result = await Promise.all(
    files.map(async (file) => {
      const itemPath = path.join(currentDir, file);
      const stats = await fs.lstat(itemPath);

      return {
        name: file,
        path: itemPath,
        type: stats.isDirectory() ? "directory" : "file",
        ext: path.extname(file),
      }
    })
  )

  result.sort((a, b) => {
    if (a.type === "directory" && b.type !== "directory") {
      return -1;
    } else if (a.type !== "directory" && b.type === "directory") {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  

  if (useTab) {
    console.log(files.join("\t"));
  } else {
    console.table(result);
  }
}
