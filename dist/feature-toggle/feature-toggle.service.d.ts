import { OnModuleInit } from '@nestjs/common';
import { AppConfigurationService } from 'src/app-configuration/app-configuration.service';
import { FeatureToggle } from './feature-toggle.constants';
export declare class FeatureToggleService implements OnModuleInit {
    private appConfigService;
    private readonly ldClient;
    constructor(appConfigService: AppConfigurationService);
    onModuleInit(): Promise<void>;
    private showFeatureToggleValues;
    variation<T extends FeatureToggle, K extends keyof T>(flag: K): Promise<T[K]>;
}
