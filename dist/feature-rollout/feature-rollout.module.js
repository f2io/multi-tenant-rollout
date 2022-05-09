"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureRolloutModule = void 0;
const feature_toggle_module_1 = require("../feature-toggle/feature-toggle.module");
const feature_rollout_provider_1 = require("./feature-rollout.provider");
class FeatureRolloutModule {
    static register(entities, featureToggleName, featureConn, primaryConn, rolloutConn) {
        const entityProviders = entities.map((entity) => (0, feature_rollout_provider_1.createFeatureRolloutProvider)(entity, featureToggleName, featureConn, primaryConn, rolloutConn));
        return {
            module: FeatureRolloutModule,
            imports: [feature_toggle_module_1.FeatureToggleModule],
            providers: entityProviders,
            exports: entityProviders,
        };
    }
}
exports.FeatureRolloutModule = FeatureRolloutModule;
//# sourceMappingURL=feature-rollout.module.js.map