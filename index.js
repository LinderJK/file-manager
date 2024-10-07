import { createInterface } from "readline";
import {commands} from "./constants.js";

const fileManager = () => {
  const args = process.argv.slice(2);
  const userName = args.find((arg) => arg.startsWith('--username=')).split('=')[1];

  if(!userName) {
    console.log('Please provide a username');
    return;
  } else {
    console.log(`Welcome to the File Manager, Username!, ${userName}`);
  }

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter the command, you can use --help for more information\n', (command) => {
    switch(command) {
      case '--help':
        console.table(commands);
        break;
      case 'list':
        console.log('Listing files...');
        break;
      case 'create':
        console.log('Creating file...');
        break;
      case 'delete':
        console.log('Deleting file...');
        break;
      default:
        console.log('Invalid command');
        break;
    }
    rl.on('close', () => {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);
      }
    )
  });
}

fileManager();
