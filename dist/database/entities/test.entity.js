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
exports.TestEntity = void 0;
const typeorm_1 = require("typeorm");
let TestEntity = class TestEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ generated: 'uuid', nullable: false }),
    __metadata("design:type", String)
], TestEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], TestEntity.prototype, "fieldString", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], TestEntity.prototype, "fieldInt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], TestEntity.prototype, "fieldFloat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false }),
    __metadata("design:type", Boolean)
], TestEntity.prototype, "fieldBoolean", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, nullable: false }),
    __metadata("design:type", Array)
], TestEntity.prototype, "fieldArray", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], TestEntity.prototype, "fieldDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: false }),
    __metadata("design:type", Date)
], TestEntity.prototype, "fieldDateTimeZone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: false }),
    __metadata("design:type", Object)
], TestEntity.prototype, "fieldJSON", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TestEntity.prototype, "fieldStringOptional", void 0);
TestEntity = __decorate([
    (0, typeorm_1.Entity)()
], TestEntity);
exports.TestEntity = TestEntity;
//# sourceMappingURL=test.entity.js.map