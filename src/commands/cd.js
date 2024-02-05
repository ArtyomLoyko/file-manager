import path from 'path'
import fs from 'fs/promises'

export const cd = async (pathToDirectory, currentPath) => {
  try {
    const newPathname = path.join(currentPath.pathname, pathToDirectory)
    await fs.access(newPathname)
    currentPath.pathname = newPathname
  } catch (err) {
    throw err
  }
}