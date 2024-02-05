import path from 'path'
import fs from 'fs'
import { stdout } from 'process'

export const cat = async (pathToFile, currentPath) => {
  try {
    const filePath = path.join(currentPath.pathname, pathToFile)
    const readableStream = fs.createReadStream(filePath)
    readableStream.on('error', () => {
      console.log('Operation failed')
    })
    readableStream.pipe(stdout)
  } catch (err) {
    throw err
  }
}