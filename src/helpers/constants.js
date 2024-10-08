export const args = process.argv.slice(2);
export const userName = args
  .find((arg) => arg.startsWith("--username="))
  .split("=")[1];