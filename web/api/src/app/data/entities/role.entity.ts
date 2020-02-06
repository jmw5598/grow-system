import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public role!: string;
}
