import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigurationService } from './app-configuration.service';
import AppConfiguration from './app-configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [AppConfiguration],
        }),
    ],
    providers: [ConfigService, AppConfigurationService],
    exports: [AppConfigurationService],
})
export class AppConfigurationModule {}
