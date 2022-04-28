/* eslint-disable import/no-dynamic-require */
const dbConfig = require(process.env.NODE_ENV === 'production' ? './dist/src/db/ormconfig.js' : './src/db/ormconfig.ts');

module.exports = dbConfig;
