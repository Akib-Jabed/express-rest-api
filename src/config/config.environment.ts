import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const environments = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT) || 3000,
  DB_HOST: process.env.DATABASE_HOST || 'localhost',
  DB_PORT: Number(process.env.DATABASE_PORT) || 3306,
  DB_USERNAME: process.env.DATABASE_USERNAME || 'admin',
  DB_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
  DB_DATABASE: process.env.DATABASE_NAME || 'test'
}

export default environments
