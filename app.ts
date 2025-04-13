import express, { Express } from 'express'
import { Server, createServer } from 'http'
import gracefulShutdown from 'http-graceful-shutdown'
import { DataSource } from 'typeorm'
import AppDataSource from './src/config/config.database'
import environments from './src/config/config.environment'

class App {
  private app: Express
  private server: Server
  private version: string
  private env: string
  private port: number

  constructor() {
    this.app = express()
    this.server = createServer(this.app)
    this.version = '/api/v1'
    this.env = environments.NODE_ENV
    this.port = environments.PORT
  }

  private async run(): Promise<void> {
    let connection: DataSource
    try {
      connection = await AppDataSource.initialize()
      console.log(`Data source has been initialized!`)
    } catch (err) {
      console.log(`Data source initialization failed! ${err}`)
    }
    const logInfo = `Server is running on port: ${this.port}`
    if (this.env !== 'production') {
      this.server.listen(this.port, () => console.log(logInfo))
    } else {
      gracefulShutdown(
        this.server.listen(this.port, () => console.log(logInfo)),
        {
          development: false,
          forceExit: true,
          timeout: 60000,
          onShutdown: async function () {
            await connection.destroy()
          }
        }
      )
    }
  }

  public async init(): Promise<void> {
    await this.run()
  }
}

;(async function () {
  if (process.env.NODE_ENV != 'test') await new App().init()
})()
