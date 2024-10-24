import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi, { SwaggerOptions, SwaggerUiOptions } from 'swagger-ui-express'
import { Application } from 'express'

const swaggerOptions:SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Products Parser API',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger e TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
}

const swaggerSpec:SwaggerUiOptions = swaggerJsdoc(swaggerOptions)

export const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
