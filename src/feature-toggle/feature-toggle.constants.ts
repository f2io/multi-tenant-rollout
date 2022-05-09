export interface FeatureToggle {
    'postgres-rollout': boolean;
    'IS-POSTGRES': string;
    // 'svc1-postgres-rollout': boolean;
    // 'svc2-postgres-rollout': boolean;
}

export const featureToggleDefaultValue: FeatureToggle = {
    'postgres-rollout': false,
    'IS-POSTGRES': 'CRDB',
    // 'svc1-postgres-rollout': false,
    // 'svc2-postgres-rollout': false,
};
