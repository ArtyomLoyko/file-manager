export const getUsername = () => {
  const arg = process.argv.find(arg => arg.startsWith('--username'))
  if (!arg) return 'Unknown'
  const username = arg.substring(11)
  if (!username.trim()) return 'Unknown'
  return username
}