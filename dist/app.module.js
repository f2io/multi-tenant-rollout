"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const feature_rollout_module_1 = require("./feature-rollout/feature-rollout.module");
const feature_toggle_module_1 = require("./feature-toggle/feature-toggle.module");
const app_configuration_module_1 = require("./app-configuration/app-configuration.module");
const database_module_1 = require("./database/database.module");
const test_entity_1 = require("./database/entities/test.entity");
const test_incr_entity_1 = require("./database/entities/test-incr.entity");
const database_config_pgdb_1 = require("./database/database.config.pgdb");
const database_config_crdb_1 = require("./database/database.config.crdb");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            feature_rollout_module_1.FeatureRolloutModule.register([test_incr_entity_1.TestIncrEntity, test_entity_1.TestEntity], 'postgres-rollout', 'default', database_config_crdb_1.default.name, database_config_pgdb_1.default.name),
            feature_toggle_module_1.FeatureToggleModule,
            app_configuration_module_1.AppConfigurationModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map