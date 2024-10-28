import { Request, Response } from 'express'
import getProcessUptime from '../utils/getProcessUptime'
import getProcessMemoryUsage from '../utils/getProccessMemoryUsage'
import importService from '../services/importService'
import { checkMongoConnectionStatus } from '../config/mongodb-connect'

export const getStatus = async (req: Request, res: Response) => {
  const memoryUsage: any = getProcessMemoryUsage()
  const lastImport = await importService.getLastedImport()
  res.json({
    api: 'Products Parser API',
    uptime: getProcessUptime(),
    memory: memoryUsage.heapUsed,
    mongoStatus: checkMongoConnectionStatus(),
    lastImport: lastImport.imported_t,
  })
}
