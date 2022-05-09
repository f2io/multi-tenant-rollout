import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestIncrEntity } from './database/entities/test-incr.entity';
import { TestEntity } from './database/entities/test.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(TestEntity)
        private testRepository: Repository<TestEntity>,
        @InjectRepository(TestIncrEntity)
        private testIncrRepository: Repository<TestIncrEntity>,
    ) {}

    async getHello(): Promise<string> {
        // const db = await this.multiTenant.getDatabaseConnection();
        const db = '';
        return `Hello World! => ${db} (${__dirname})`;
    }

    async getTest(): Promise<TestEntity[]> {
        const tests = this.testRepository.find();
        return tests;
    }

    async getTestIncr(): Promise<TestIncrEntity[]> {
        // console.log('😎', 'MultiTenantProvider', this.multiTenantProvider);
        const tests = this.testIncrRepository.find();
        return tests;
    }
}
