import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Resource extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 500 })
  name: string;

}
