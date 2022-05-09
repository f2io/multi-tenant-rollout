import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TestEntity {
    @PrimaryColumn({ generated: 'uuid', nullable: false })
    public id: string;

    @Column({ type: 'varchar', nullable: false })
    public fieldString: string;

    @Column({ type: 'int', nullable: false })
    public fieldInt: number;

    @Column({ type: 'float', nullable: false })
    public fieldFloat: number;

    @Column({ type: 'boolean', nullable: false })
    public fieldBoolean: boolean;

    @Column({ type: 'varchar', array: true, nullable: false })
    public fieldArray: string[];

    @Column({ type: 'timestamp', nullable: false })
    public fieldDate: Date;

    @Column({ type: 'timestamptz', nullable: false })
    public fieldDateTimeZone: Date;

    @Column({ type: 'json', nullable: false })
    public fieldJSON: object;

    @Column({ type: 'text', nullable: true })
    public fieldStringOptional?: string;
}
