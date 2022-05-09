"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeatureRolloutProvider = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feature_toggle_service_1 = require("../feature-toggle/feature-toggle.service");
const typeorm_2 = require("typeorm");
function createFeatureRolloutProvider(entity, featureToggleRolloutName, featureConnName, primaryConnName, rolloutConnName) {
    return {
        provide: (0, typeorm_1.getRepositoryToken)(entity, featureConnName),
        scope: common_1.Scope.REQUEST,
        useFactory: async (featureToggleService, primaryConn, rolloutConn) => {
            const rollout = await featureToggleService.variation(featureToggleRolloutName);
            console.log('🚀 ~ file: multi-tenant.ts ~ line 23 ~ rollout', rollout);
            const conn = rollout ? rolloutConn : primaryConn;
            console.log('🚀 ~ file: multi-tenant.ts ~ line 31 ~ conn', conn.name);
            if (conn instanceof typeorm_2.Connection) {
                const repository = conn.getRepository(entity);
                console.log('😎😎', 'PROVIDER', repository !== undefined);
                return repository;
            }
            throw new common_1.InternalServerErrorException('Rollout provider have not received a Connection');
        },
        inject: [
            feature_toggle_service_1.FeatureToggleService,
            (0, typeorm_1.getConnectionToken)(primaryConnName),
            (0, typeorm_1.getConnectionToken)(rolloutConnName),
        ],
    };
}
exports.createFeatureRolloutProvider = createFeatureRolloutProvider;
//# sourceMappingURL=feature-rollout.provider.js.map