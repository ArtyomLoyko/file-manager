import * as readline from 'node:readline/promises'
import os from 'os'
import { COMMANDS } from './commands/index.js'

const rl =  readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 

const username = process.argv.find(arg => arg.startsWith('--username')).substring(11)
console.log(`Welcome to the File Manager, ${username}!`)
let path = os.homedir()
console.log(`You are currently in ${path}`)

rl.on('line', (input) => {
  if (input === '.exit') {
    rl.close()
  }

  const [command, ...restArgs] = input.split(' ')
  const commandHandler = COMMANDS[command]

  if (commandHandler) {
    try {
      commandHandler(...restArgs, path)
    } catch {
      console.log('Operation failed')
    }
  } else {
    console.log('Invalid input')
  }
}); 

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
  process.exit(0);
});