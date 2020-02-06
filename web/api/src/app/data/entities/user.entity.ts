import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './role.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ unique: true })
  public username!: string;

  @Column()
  public password!: string;

  @ManyToMany(type => Role)
  public roles!: Role[];
}
