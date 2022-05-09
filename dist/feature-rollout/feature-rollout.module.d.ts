import { DynamicModule } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { FeatureToggle } from 'src/feature-toggle/feature-toggle.constants';
export declare class FeatureRolloutModule {
    static register(entities: EntityClassOrSchema[], featureToggleName: keyof FeatureToggle, featureConn: string, primaryConn: string, rolloutConn: string): DynamicModule;
}
