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
        getCpus();
        break;

}
}

function getCpus() {
  const cpus = os.cpus();
  console.log(`Total CPUs: ${cpus.length}`);
  console.log(`Model: ${cpus[0].model}`);
  cpus.forEach((cpu, index) => {
    console.log(`Speed: ${(index + 1)} - ${(cpu.speed / 1000).toFixed(2)} GHz`);
    console.log('------------');
  })
}
