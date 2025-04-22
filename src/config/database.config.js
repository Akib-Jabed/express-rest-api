import 'reflect-metadata'
import { DataSource } from 'typeorm'

import environment from './environment.config.js'

const { database } = environment
const { client } = database

const entityPath = 'src/entities/*.js'

const AppDataSource = new DataSource({
  type: client,
  host: database[client].host,
  port: database[client].port || 3306,
  username: database[client].username || 'admin',
  password: database[client].password || 'password',
  database: database[client].database || 'test',
  entities: [entityPath],
  synchronize: false,
  logging: false
})

export default AppDataSource
