import cron from 'node-cron'
import openfoodfactsETLTasks from './openFoodFactsETL'

const scheduleTasks = () => {
  cron.schedule('*/30 * * * * *', () => {
    console.log('Iniciando a tarea agendada openfoodfactsETLTasks...')
    openfoodfactsETLTasks()
  })
}

export default scheduleTasks
