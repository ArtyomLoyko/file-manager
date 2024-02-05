import * as osModule from 'os'

export const os = (arg) => {
  try {
    switch(arg) {
      case '--EOL':
        console.log(osModule.EOL)
        break
      case '--cpus': 
        const cpus = osModule.cpus().map(cpu => ({ model: cpu.model, speed: cpu.speed / 1000 }))
        console.log(cpus)
        break
      case '--homedir': 
        const homedir = osModule.homedir()
        console.log(homedir)
        break
      case '--username': 
        const { username } = osModule.userInfo()
        console.log(username)
        break
      case '--architecture': 
        const arch = osModule.arch()
        console.log(arch)
        break
      default:
        throw new Error()
    }
  } catch (err) {
    throw err
  }
}