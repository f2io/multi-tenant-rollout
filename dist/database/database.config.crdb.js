"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const databaseConfiguration = {
    name: 'crdb_01',
    type: 'cockroachdb',
    host: 'localhost',
    port: 26257,
    username: 'root',
    database: 'crdb_01',
    entities: [(0, path_1.join)(__dirname, '/entities/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '/migration/*{.ts,.js}')],
    migrationsRun: true,
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production' ? true : false,
};
exports.default = databaseConfiguration;
//# sourceMappingURL=database.config.crdb.js.map