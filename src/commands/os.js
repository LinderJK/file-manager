import os from "os";


export default async function osInfo(args) {
  if (args.length !== 1) {
    console.log("Invalid input: wrong argument type.");
    return;
  }

  const flag = args[0];
  console.log(flag);
  switch (flag) {
    case "--EOL":
      process.stdout.write(`End of Line (EOL) marker: ${JSON.stringify(os.EOL)} \n`);
      break;
      case "--cpus":
        process.stdout.write(`Number of CPUs: ${os.cpus().length} \n`);
        break;

}
}
