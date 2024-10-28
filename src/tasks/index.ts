import cron from 'node-cron'
import openfoodfactsETLTasks from './openFoodFactsETL'

const scheduleTasks = () => {
  // Forçando rodar pelo menos na primeira vez para ter dados carregados em caso de teste
  openfoodfactsETLTasks()
  cron.schedule('0 0 * * *', () => {
    console.log('Iniciando a tarea agendada openfoodfactsETLTasks...')
    openfoodfactsETLTasks()
  })
}

export default scheduleTasks
