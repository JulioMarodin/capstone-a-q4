/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import { faker } from '@faker-js/faker';
import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import path from 'path';
import { createConnection, getConnection } from 'typeorm';
import { IUsers } from '../repositories/Users/interfaces';
import dbConfig from '../db/ormconfig';

const generateUser = (): IUsers => {
  const id = faker.datatype.uuid();
    const name = faker.name.firstName().toLowerCase();
    const email = faker.internet.email(name).toLowerCase();
    const password = faker.datatype.string(10);
    const biography = faker.lorem.paragraph().toString();
    const birthday = faker.date.past(10);
    const city = faker.locale.trim().toLowerCase();
    const admin = faker.datatype.boolean();
    return {
        id,
        name,
        email,
        password,
        biography,
        birthday,
        city,
    };
};

class ConnectionTest {
  dbPath: string;

  constructor() {
    this.dbPath = path.join(__dirname, '../../dbTest.sqlite');
  }

  create = async () => {
    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }

    await createConnection(dbConfig);
  };

  close = async () => {
    await getConnection().close();

    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }
  };

  clear = async () => {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  };
}

export { generateUser, ConnectionTest };
