const getProcessUptime = (): string => {
  const uptimeSeconds = process.uptime()
  const hours = Math.floor(uptimeSeconds / 3600)
  const minutes = Math.floor((uptimeSeconds % 3600) / 60)
  const seconds = uptimeSeconds % 60

  return `${hours}h ${minutes}m ${seconds}s`
}

export default getProcessUptime
