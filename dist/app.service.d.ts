import { Repository } from 'typeorm';
import { TestIncrEntity } from './database/entities/test-incr.entity';
import { TestEntity } from './database/entities/test.entity';
export declare class AppService {
    private testRepository;
    private testIncrRepository;
    constructor(testRepository: Repository<TestEntity>, testIncrRepository: Repository<TestIncrEntity>);
    getHello(): Promise<string>;
    getTest(): Promise<TestEntity[]>;
    getTestIncr(): Promise<TestIncrEntity[]>;
}
