import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Products Parser API')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})