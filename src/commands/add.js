import path from "path";
import fs from "fs/promises";

export default async function add(args) {
  if (args.length > 1 || args.length === 0) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const fileName = args[0];
  const filePath = path.join(process.cwd(), fileName);
  
  try {
    await fs.access(filePath);
    throw new Error("File already exists.");
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, "");
        console.log(`File '${fileName}' created successfully!`);
      } catch (writeErr) {
        console.error(`Error creating file: ${writeErr.message}`);
      }
    } else if (err.code === "EACCES") {
      console.error(`Permission denied: Cannot access '${filePath}'.`);
    } else {
      console.error(`Unexpected error: ${err.message}`);
    }
  }
}
