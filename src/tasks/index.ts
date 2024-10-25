import cron from 'node-cron'

const exampleTask = () => {
  console.log('Executando tarea programada...')
}

const scheduleTasks = () => {
  cron.schedule('*/30 * * * * *', () => {
    console.log('Iniciando tarea programada...')
    exampleTask()
  })
}

export default scheduleTasks
