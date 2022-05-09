import { Provider } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { FeatureToggle } from 'src/feature-toggle/feature-toggle.constants';
export declare function createFeatureRolloutProvider<T extends EntityClassOrSchema>(entity: T, featureToggleRolloutName: keyof FeatureToggle, featureConnName: string, primaryConnName: string, rolloutConnName: string): Provider;
