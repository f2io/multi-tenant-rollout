"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appConfigVarName = {
    launchDarklySDK: 'LAUNCHDARKLY_SDK',
    v1: 'V1',
    v2: 'V2',
    v3: 'V3',
};
exports.default = () => {
    const initialConfig = {
        launchDarklySDK: process.env[appConfigVarName.launchDarklySDK] || '',
        v1: 'string',
        v2: true,
        v3: 100,
    };
    return initialConfig;
};
//# sourceMappingURL=app-configuration.js.map