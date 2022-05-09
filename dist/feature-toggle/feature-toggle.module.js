"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureToggleModule = void 0;
const common_1 = require("@nestjs/common");
const app_configuration_module_1 = require("../app-configuration/app-configuration.module");
const feature_toggle_service_1 = require("./feature-toggle.service");
let FeatureToggleModule = class FeatureToggleModule {
};
FeatureToggleModule = __decorate([
    (0, common_1.Module)({
        imports: [app_configuration_module_1.AppConfigurationModule],
        providers: [feature_toggle_service_1.FeatureToggleService],
        exports: [feature_toggle_service_1.FeatureToggleService],
    })
], FeatureToggleModule);
exports.FeatureToggleModule = FeatureToggleModule;
//# sourceMappingURL=feature-toggle.module.js.map