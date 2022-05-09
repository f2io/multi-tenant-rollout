import { DynamicModule } from '@nestjs/common';
import { FeatureToggleModule } from 'src/feature-toggle/feature-toggle.module';
import { createFeatureRolloutProvider } from './feature-rollout.provider';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { FeatureToggle } from 'src/feature-toggle/feature-toggle.constants';



export class FeatureRolloutModule {
    static register(
        entities: EntityClassOrSchema[],
        featureToggleName: keyof FeatureToggle,
        featureConn: string,
        primaryConn: string,
        rolloutConn: string,
    ): DynamicModule {
        const entityProviders = entities.map((entity) =>
            createFeatureRolloutProvider(
                entity,
                featureToggleName, //'postgres-rollout',
                featureConn, //'default',
                primaryConn,
                rolloutConn,
            ),
        );
        return {
            module: FeatureRolloutModule,
            imports: [FeatureToggleModule],
            providers: entityProviders,
            exports: entityProviders,
        };
    }
}
