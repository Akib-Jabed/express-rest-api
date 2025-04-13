import 'reflect-metadata'
import { DataSource } from 'typeorm'
import environment from './config.environment'

const { NODE_ENV } = environment

const entityPath = !['production', 'staging'].includes(NODE_ENV) ? 'src/models/*.ts' : 'dist/models/*.js'
const migrationPath = !['production', 'staging'].includes(NODE_ENV) ? 'src/database/migrations' : 'dist/database/migrations'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: environment.DB_HOST,
  port: environment.DB_PORT || 3306,
  username: environment.DB_USERNAME || 'admin',
  password: environment.DB_PASSWORD || 'password',
  database: environment.DB_DATABASE || 'test',
  entities: [entityPath],
  migrations: [migrationPath],
  synchronize: true,
  logging: false
})

export default AppDataSource
