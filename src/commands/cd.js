import path from 'path'

export const cd = (pathToDirectory, currentPath) => {
  console.log(path.resolve(currentPath.pathname, pathToDirectory))
  const newPathname = path.join(currentPath.pathname, pathToDirectory)
  currentPath.pathname = newPathname
}