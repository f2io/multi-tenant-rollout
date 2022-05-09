import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestIncrEntity } from './database/entities/test-incr.entity';
import { TestEntity } from './database/entities/test.entity';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): Promise<string> {
        return this.appService.getHello();
    }

    @Get('/getTest')
    getTest(): Promise<TestEntity[]> {
        return this.appService.getTest();
    }

    @Get('/getTestIncr')
    getTestIncr(): Promise<TestIncrEntity[]> {
        return this.appService.getTestIncr();
    }
}
