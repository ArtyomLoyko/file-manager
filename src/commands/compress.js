import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import stream from 'stream/promises'

export const compress = async (pathToFile, pathToDestination, currentPath) => {
  try {
    const input = path.join(currentPath.pathname, pathToFile)
    const output = path.join(currentPath.pathname, pathToDestination)

    await stream.pipeline(
      fs.createReadStream(input),
      zlib.createBrotliCompress(),
      fs.createWriteStream(output),
    )
  } catch (err) {
    throw err
  }
}