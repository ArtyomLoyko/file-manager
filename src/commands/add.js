import path from 'path'
import fs from 'fs/promises'

export const add = async (newFileName, currentPath) => {
  try {
    const filePath = path.join(currentPath.pathname, newFileName)
    await fs.writeFile(filePath, '', { flag: 'wx' })
  } catch (err) {
    throw err
  }
}