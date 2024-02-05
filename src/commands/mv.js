import path from 'path'
import fs from 'fs'

export const mv = async (pathToFile, pathToNewDirectory, currentPath) => {
  try {
    const filename = path.basename(pathToFile)
    const source = path.join(currentPath.pathname, pathToFile)
    const destination = path.join(currentPath.pathname, pathToNewDirectory, filename)

    const readableStream = fs.createReadStream(source)
    readableStream.on("error", err => {
      console.log('Operation failed')
    })
    readableStream.on('open', async () => {
      const writableStream = fs.createWriteStream(destination)
      writableStream.on("error", err => {
        console.log('Operation failed')
      })
      writableStream.on('open', async () => {
        readableStream.pipe(writableStream)
        await fs.promises.rm(source)
      })
    })
  } catch (err) {
    throw err
  }
}