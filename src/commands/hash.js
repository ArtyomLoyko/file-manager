import path from 'path'
import fs from 'fs/promises'
import crypto from 'crypto'

export const hash = async (pathToFile, currentPath) => {
  try {
    const filePathname = path.join(currentPath.pathname, pathToFile)
    const buff = await fs.readFile(filePathname)
    const hex = crypto.createHash('sha256').update(buff).digest('hex')
    console.log(hex)
  } catch (err) {
    throw err
  }
}