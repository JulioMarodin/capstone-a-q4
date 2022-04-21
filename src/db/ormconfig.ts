import { ConnectionOptions } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const prodConfig = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.*')],
  migrations: [path.join(__dirname, '../migrations/**/*.*')],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
  ssl: { rejectUnauthorized: false },
} as ConnectionOptions;

const devConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.ts')],
  migrations: [path.join(__dirname, '../migrations/**/*.ts')],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
  ssl: false,
} as ConnectionOptions;

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
