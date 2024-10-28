import cron from 'node-cron'
import openfoodfactsETLTasks from './openFoodFactsETL'

const scheduleTasks = () => {
  cron.schedule('0 0 * * *', () => {
    console.log('Iniciando a tarea agendada openfoodfactsETLTasks...')
    openfoodfactsETLTasks()
  })
}

export default scheduleTasks
