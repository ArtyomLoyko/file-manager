import path from 'path'
import fs from 'fs'

export const cp = async (pathToFile, pathToNewDirectory, currentPath) => {
  try {
    const filename = path.basename(pathToFile)
    const source = path.join(currentPath.pathname, pathToFile)
    const destination = path.join(currentPath.pathname, pathToNewDirectory, filename)

    const readableStream = fs.createReadStream(source)
    const writableStream = fs.createWriteStream(destination)

    readableStream.pipe(writableStream)
    
  } catch (err) {
    throw err
  }
}