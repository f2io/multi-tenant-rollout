"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1652029028666 = void 0;
class init1652029028666 {
    constructor() {
        this.name = 'init1652029028666';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "test_incr_entity" ("id" SERIAL NOT NULL, "fieldString" character varying NOT NULL, "fieldInt" integer NOT NULL, "fieldFloat" double precision NOT NULL, "fieldBoolean" boolean NOT NULL, "fieldArray" character varying array NOT NULL, "fieldDate" TIMESTAMP NOT NULL, "fieldDateTimeZone" TIMESTAMP WITH TIME ZONE NOT NULL, "fieldJSON" json NOT NULL, "fieldStringOptional" text, CONSTRAINT "PK_2de3816e45458470e7d0150e5a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test_entity" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "fieldString" character varying NOT NULL, "fieldInt" integer NOT NULL, "fieldFloat" double precision NOT NULL, "fieldBoolean" boolean NOT NULL, "fieldArray" character varying array NOT NULL, "fieldDate" TIMESTAMP NOT NULL, "fieldDateTimeZone" TIMESTAMP WITH TIME ZONE NOT NULL, "fieldJSON" json NOT NULL, "fieldStringOptional" text, CONSTRAINT "PK_cc0413536e3afc0e586996bea40" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "test_entity"`);
        await queryRunner.query(`DROP TABLE "test_incr_entity"`);
    }
}
exports.init1652029028666 = init1652029028666;
//# sourceMappingURL=1652029028666-init.js.map