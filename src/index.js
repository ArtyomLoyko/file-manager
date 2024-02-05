import readline from 'readline/promises'
import os from 'os'
import { COMMANDS } from './commands/index.js'
import { Path } from './utils/path.js'
import { getUsername } from './utils/generic.js'

const rl =  readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const username = getUsername()
console.log(`Welcome to the File Manager, ${username}!`)

let currentPath = new Path(os.homedir())
currentPath.log()

rl.on('line', async (input) => {
  if (input === '.exit') {
    rl.close()
  }

  const [command, ...restArgs] = input.split(' ')
  const commandHandler = COMMANDS[command]

  if (commandHandler) {
    try {
      await commandHandler(...restArgs, currentPath)
      currentPath.log()
    } catch (err) {
      console.log('Operation failed')
    }
  } else {
    console.log('Invalid input')
  }
})

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
  process.exit(0)
})