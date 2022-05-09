import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import pgdbConfig from './database.config.pgdb';
import crdbConfig from './database.config.crdb';

@Module({
    imports: [
        TypeOrmModule.forRoot(pgdbConfig),
        TypeOrmModule.forRoot(crdbConfig),
    ],
})
export class DatabaseModule {}
