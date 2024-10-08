import { createInterface } from "readline";
import { commands } from "./helpers/commands.js";
import { userName } from "./helpers/constants.js";
import os from "os";
import goUp from "./commands/up.js";
import cd from "./commands/cd.js";
import ls from "./commands/ls.js";
import cat from "./commands/cat.js";
import add from "./commands/add.js";
import rename from "./commands/rn.js";


const fileManager = () => {
  let currentDirectory = os.homedir();
  if(currentDirectory) {
    process.chdir(currentDirectory);
  }
  if (!userName) {
    console.log("Please provide a username");
    return;
  } else {
    console.log(`Welcome to the File Manager, ${userName}!`);
    console.log("Enter the command. Type 'help' for a list of commands.");
    console.log(`You are currently in '${currentDirectory}'`);
    
  }

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.stdin.on("keypress", (ch, key) => {
    if(key.name === 'tab') {
      ls('', true);
    }
  });

  rl.on("line", async(line) => {
    const [command, ...args] = line.trim().split(" ");
    try {
      switch (command) {
        case "help":
          console.table(commands);
          break;
        case "cd":
          await cd(args);
          break;
        case "up":
          await goUp(args);
          break;
        case "ls":
          await ls(args);
          break;
        case "add":
          await add(args);
          break;
        case "cat":
          await cat(args);
          break;
        case "rn":
          await rename(args);
          break;
        // case "hash":
        //   await hash(args);
        //   break;
        // case "compress":
        //   await compress(args);
        //   break;
        // case "decompress":
        //   await decompress(args);
        //   break;
        case '.exit':
          rl.emit('SIGINT');
          break;
        default:
          console.log("Invalid command");
          break;
      }
        currentDirectory = process.cwd();
        console.log(`You are currently in ${currentDirectory}`);
    } catch (error) {
      console.error(error);
    }
  });

  rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  })


};

fileManager();
