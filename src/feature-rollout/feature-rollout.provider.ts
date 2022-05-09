import { InternalServerErrorException, Provider, Scope } from '@nestjs/common';
import { getConnectionToken, getRepositoryToken } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { FeatureToggle } from 'src/feature-toggle/feature-toggle.constants';
import { FeatureToggleService } from 'src/feature-toggle/feature-toggle.service';
import { Connection } from 'typeorm';

export function createFeatureRolloutProvider<T extends EntityClassOrSchema>(
    entity: T,
    featureToggleRolloutName: keyof FeatureToggle,
    featureConnName: string,
    primaryConnName: string,
    rolloutConnName: string,
): Provider {
    return {
        provide: getRepositoryToken(entity, featureConnName),
        scope: Scope.REQUEST,
        useFactory: async (
            featureToggleService: FeatureToggleService,
            primaryConn: Connection,
            rolloutConn: Connection,
        ) => {
            const rollout = await featureToggleService.variation(
                featureToggleRolloutName,
            );
            console.log(
                '🚀 ~ file: multi-tenant.ts ~ line 23 ~ rollout',
                rollout,
            );

            const conn = rollout ? rolloutConn : primaryConn;
            console.log(
                '🚀 ~ file: multi-tenant.ts ~ line 31 ~ conn',
                conn.name,
            );

            if (conn instanceof Connection) {
                const repository = conn.getRepository(entity);
                console.log('😎😎', 'PROVIDER', repository !== undefined);

                return repository;
            }

            throw new InternalServerErrorException(
                'Rollout provider have not received a Connection',
            );
        },
        inject: [
            FeatureToggleService,
            getConnectionToken(primaryConnName),
            getConnectionToken(rolloutConnName),
        ],
    };
}
