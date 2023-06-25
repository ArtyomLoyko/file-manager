import path from 'path'
import fs from 'fs'

export const mv = async (pathToFile, pathToNewDirectory, currentPath) => {
  try {
    const filename = path.basename(pathToFile)
    const source = path.join(currentPath.pathname, pathToFile)
    const destination = path.join(currentPath.pathname, pathToNewDirectory, filename)

    const readableStream = fs.createReadStream(source)
    const writableStream = fs.createWriteStream(destination)

    readableStream.on('close', async () => {
      await fs.promises.rm(source)
    })

    readableStream.pipe(writableStream)
    
  } catch (err) {
    throw err
  }
}