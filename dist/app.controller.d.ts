import { AppService } from './app.service';
import { TestIncrEntity } from './database/entities/test-incr.entity';
import { TestEntity } from './database/entities/test.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<string>;
    getTest(): Promise<TestEntity[]>;
    getTestIncr(): Promise<TestIncrEntity[]>;
}
