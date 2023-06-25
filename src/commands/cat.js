import path from 'path'
import fs from 'fs/promises'

export const cat = async (pathToFile, currentPath) => {
  try {
    const filePath = path.join(currentPath.pathname, pathToFile)
    const content = await fs.readFile(filePath, { encoding: 'utf8' })

    console.log(content)
  } catch (err) {
    throw err
  }
}