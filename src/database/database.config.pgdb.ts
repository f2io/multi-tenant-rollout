import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const databaseConfiguration: ConnectionOptions = {
    name: 'pgdb_01',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pgdb_01',
    entities: [join(__dirname, '/entities/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '/migration/*{.ts,.js}')],
    migrationsRun: true,
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production' ? true : false,
    uuidExtension: 'pgcrypto',
    cli: {
        migrationsDir: './src/database/migration/',
    },
};

export default databaseConfiguration;
