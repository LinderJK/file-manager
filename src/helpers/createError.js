

export default function createError (error) {
  
  switch (error.code) {
    case "ENOENT":
      throw new Error("Operation failed: The file/directory does not exist.");
    case "EACCES":
      throw new Error("Operation failed: The file is not readable.");
    case "ERR_INVALID_ARG_TYPE":
      throw new Error("Invalid input: wrong argument type.");
    default:
      throw error;
  }
}