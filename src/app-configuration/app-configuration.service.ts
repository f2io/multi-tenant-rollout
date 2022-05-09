import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigVar } from './app-configuration';

@Injectable()
export class AppConfigurationService {
    constructor(private configService: ConfigService) {}

    get<T extends AppConfigVar, K extends keyof T>(configName: K): T[K] {
        if (typeof configName === 'string') {
            return this.configService.get(configName);
        }
    }
}
