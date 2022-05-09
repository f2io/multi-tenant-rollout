import { Module } from '@nestjs/common';
import { AppConfigurationModule } from 'src/app-configuration/app-configuration.module';
import { FeatureToggleService } from './feature-toggle.service';

@Module({
    imports: [AppConfigurationModule],
    providers: [FeatureToggleService],
    exports: [FeatureToggleService],
})
export class FeatureToggleModule {}
