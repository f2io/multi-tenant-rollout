"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureToggleService = void 0;
const common_1 = require("@nestjs/common");
const LaunchDarkly = require("launchdarkly-node-server-sdk");
const app_configuration_service_1 = require("../app-configuration/app-configuration.service");
const feature_toggle_constants_1 = require("./feature-toggle.constants");
const user = {
    key: 'service',
};
let FeatureToggleService = class FeatureToggleService {
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
        console.log('ModuleInit::FeatureToggle::constructor', this.appConfigService.get('launchDarklySDK'));
        this.ldClient = LaunchDarkly.init(this.appConfigService.get('launchDarklySDK'));
    }
    async onModuleInit() {
        console.log('ModuleInit::FeatureToggle::onModuleInit');
        await this.ldClient.waitForInitialization();
        await this.showFeatureToggleValues();
    }
    async showFeatureToggleValues() {
        console.log('initialized', this.ldClient.initialized(), 'isOffline', this.ldClient.isOffline());
        for (const [key, defaultValue] of Object.entries(feature_toggle_constants_1.featureToggleDefaultValue)) {
            const value = await this.variation(key);
            console.log(key, 'defaultValue:', defaultValue, 'value:', value);
        }
    }
    async variation(flag) {
        if (typeof flag === 'string') {
            const defaultValue = feature_toggle_constants_1.featureToggleDefaultValue[flag];
            return this.ldClient.variation(flag, user, defaultValue);
        }
    }
};
FeatureToggleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_configuration_service_1.AppConfigurationService])
], FeatureToggleService);
exports.FeatureToggleService = FeatureToggleService;
//# sourceMappingURL=feature-toggle.service.js.map