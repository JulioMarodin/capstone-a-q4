import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import dbConfig from './db/ormconfig';

createConnection(dbConfig).then(() => {
  const PORT = process.env.PORT ?? 3000;
  // eslint-disable-next-line no-console
  console.log('Database connected');
  app.listen(process.env.PORT || 3000);
  // eslint-disable-next-line no-console
}).catch((err) => console.log(err));
