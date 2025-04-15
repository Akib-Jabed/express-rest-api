import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express, { Express } from 'express'
import rateLimit from 'express-rate-limit'
import session from 'express-session'
import slowDown from 'express-slow-down'
import helmet from 'helmet'
import hpp from 'hpp'
import { Server, createServer } from 'http'
import gracefulShutdown from 'http-graceful-shutdown'
import nocache from 'nocache'
import { DataSource } from 'typeorm'
import zlib from 'zlib'
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

  private async middleware() {
    this.app.use(bodyParser.json({ limit: '3mb' }))
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(hpp({ checkBody: true, checkQuery: true }))
    this.app.use(nocache())
    this.app.use(helmet({ contentSecurityPolicy: false }))
    this.app.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true
      })
    )
    this.app.use(
      compression({
        strategy: zlib.constants.Z_RLE,
        level: zlib.constants.Z_BEST_COMPRESSION,
        memLevel: zlib.constants.Z_BEST_COMPRESSION
      })
    )
    this.app.use(
      rateLimit({
        windowMs: 3 * 60 * 1000,
        max: 100,
        message: 'To many request, send back request after 3 minutes'
      })
    )
    this.app.use(
      slowDown({
        windowMs: 3 * 60 * 1000,
        delayMs: 24 * 60 * 2000,
        delayAfter: 100
      })
    )
    this.app.use(
      session({
        resave: false,
        saveUninitialized: false,
        secret: environments.SESSION_SECRET,
        cookie: { httpOnly: true }
      })
    )
  }

  private async run(): Promise<void> {
    let connection: DataSource
    try {
      connection = await AppDataSource.initialize()
      console.log(`Data source has been initialized!`)
    } catch (err) {
      console.log(`Data source initialization failed! ${err}`)
    }
    const serverInfo = `Server is running on port: ${this.port}`
    if (this.env !== 'production') {
      this.server.listen(this.port, () => console.log(serverInfo))
    } else {
      gracefulShutdown(
        this.server.listen(this.port, () => console.log(serverInfo)),
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
    await this.middleware()
    await this.run()
  }
}

;(async function () {
  if (process.env.NODE_ENV !== 'test') await new App().init()
})()
