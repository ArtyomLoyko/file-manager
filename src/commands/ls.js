import fs from 'fs/promises'

export const ls = async (currentPath) => {
  try {
    const files = await fs.readdir(currentPath.pathname, { withFileTypes: true })
    const dataToPrint = files
      .map(f => ({
        name: f.name,
        type: f.isDirectory() ? 'directory' : 'file'
      }))
      .sort((a, b) => a.type.localeCompare(b.type))
  
    console.table(dataToPrint)
  } catch (err) {
    throw err
  }
}