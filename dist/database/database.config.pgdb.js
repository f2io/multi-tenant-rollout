"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const databaseConfiguration = {
    name: 'pgdb_01',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pgdb_01',
    entities: [(0, path_1.join)(__dirname, '/entities/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '/migration/*{.ts,.js}')],
    migrationsRun: true,
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production' ? true : false,
    uuidExtension: 'pgcrypto',
    cli: {
        migrationsDir: './src/database/migration/',
    },
};
exports.default = databaseConfiguration;
//# sourceMappingURL=database.config.pgdb.js.map