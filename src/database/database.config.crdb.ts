import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const databaseConfiguration: ConnectionOptions = {
    name: 'crdb_01',
    type: 'cockroachdb',
    host: 'localhost',
    port: 26257,
    username: 'root',
    // password: 'postgres',
    database: 'crdb_01',
    entities: [join(__dirname, '/entities/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '/migration/*{.ts,.js}')],
    migrationsRun: true,
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production' ? true : false,
};

export default databaseConfiguration;
