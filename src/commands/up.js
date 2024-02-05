import path from 'path'

export const up = (currentPath) => {
  const newPathname = path.join(currentPath.pathname, '../')
  currentPath.pathname = newPathname
}