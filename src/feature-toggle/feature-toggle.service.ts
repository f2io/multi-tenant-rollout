import { Injectable, OnModuleInit } from '@nestjs/common';
import * as LaunchDarkly from 'launchdarkly-node-server-sdk';
import { AppConfigurationService } from 'src/app-configuration/app-configuration.service';
import {
    FeatureToggle,
    featureToggleDefaultValue,
} from './feature-toggle.constants';

const user: LaunchDarkly.LDUser = {
    key: 'service',
};

@Injectable()
export class FeatureToggleService implements OnModuleInit {
    private readonly ldClient: LaunchDarkly.LDClient;

    constructor(private appConfigService: AppConfigurationService) {
        console.log(
            'ModuleInit::FeatureToggle::constructor',
            this.appConfigService.get('launchDarklySDK'),
        );
        this.ldClient = LaunchDarkly.init(
            this.appConfigService.get('launchDarklySDK'),
        );
    }

    async onModuleInit() {
        console.log('ModuleInit::FeatureToggle::onModuleInit');
        await this.ldClient.waitForInitialization();
        await this.showFeatureToggleValues();
    }

    private async showFeatureToggleValues() {
        console.log(
            'initialized',
            this.ldClient.initialized(),
            'isOffline',
            this.ldClient.isOffline(),
        );

        for (const [key, defaultValue] of Object.entries(
            featureToggleDefaultValue,
        )) {
            const value = await this.variation(key as keyof FeatureToggle);
            console.log(key, 'defaultValue:', defaultValue, 'value:', value);
        }
    }

    async variation<T extends FeatureToggle, K extends keyof T>(
        flag: K,
    ): Promise<T[K]> {
        if (typeof flag === 'string') {
            const defaultValue = featureToggleDefaultValue[flag as string];
            return this.ldClient.variation(flag, user, defaultValue);
        }
    }
}
