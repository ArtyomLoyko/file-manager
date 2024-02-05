import path from 'path'
import fs from 'fs/promises'

export const rm = async (pathToFile, currentPath) => {
  try {
    const source = path.join(currentPath.pathname, pathToFile)
    await fs.rm(source)
  } catch (err) {
    throw err
  }
}