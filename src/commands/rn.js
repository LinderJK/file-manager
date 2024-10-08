import path from "path";
import fs from "fs/promises";
import createError from "../helpers/createError.js";


export default async function rename(args) {
  if (args.length !== 2) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const [oldName, newName] = args;
  const file = path.join(process.cwd(), oldName);
  
  try {
    await fs.access(file);
    await fs.rename(file, path.join(process.cwd(), newName));
    console.log(`File '${oldName}' renamed to '${newName}' successfully!`);
  } catch (err) {
    createError(err);
  } 

}