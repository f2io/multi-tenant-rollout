import { ConfigService } from '@nestjs/config';
import { AppConfigVar } from './app-configuration';
export declare class AppConfigurationService {
    private configService;
    constructor(configService: ConfigService);
    get<T extends AppConfigVar, K extends keyof T>(configName: K): T[K];
}
