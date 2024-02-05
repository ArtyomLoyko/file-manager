import path from 'path'
import fs from 'fs/promises'

export const rn = async (pathToFile, newFileName, currentPath) => {
  try {
    const source = path.join(currentPath.pathname, pathToFile)
    const destination = path.join(currentPath.pathname, newFileName)
    await fs.rename(source, destination)
  } catch (err) {
    throw err
  }
}