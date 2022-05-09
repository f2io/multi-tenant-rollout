export interface AppConfigVar {
    launchDarklySDK: string;
    v1: string;
    v2: boolean;
    v3: number;
}

const appConfigVarName: Record<keyof AppConfigVar, string> = {
    launchDarklySDK: 'LAUNCHDARKLY_SDK',
    v1: 'V1',
    v2: 'V2',
    v3: 'V3',
};

// Loading configuration dotenv to configService
export default () => {
    const initialConfig: AppConfigVar = {
        launchDarklySDK: process.env[appConfigVarName.launchDarklySDK] || '',
        v1: 'string',
        v2: true,
        v3: 100,
    };
    return initialConfig;
};
