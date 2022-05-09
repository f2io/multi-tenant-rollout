import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureRolloutModule } from './feature-rollout/feature-rollout.module';
import { FeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { AppConfigurationModule } from './app-configuration/app-configuration.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './database/entities/test.entity';
import { TestIncrEntity } from './database/entities/test-incr.entity';
import pgdbConfig from './database/database.config.pgdb';
import crdbConfig from './database/database.config.crdb';

@Module({
    imports: [
        // MultiTenantModule,
        FeatureRolloutModule.register(
            [TestIncrEntity, TestEntity],
            'postgres-rollout',
            'default',
            crdbConfig.name,
            pgdbConfig.name,
        ),
        FeatureToggleModule,
        AppConfigurationModule,
        DatabaseModule,
        // TypeOrmModule.forFeature([TestEntity, TestIncrEntity], 'pgdb_01'),
        // TypeOrmModule.forFeature([TestEntity], 'pgdb_01'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
