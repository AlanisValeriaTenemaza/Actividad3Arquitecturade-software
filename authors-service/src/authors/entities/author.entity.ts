import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Person } from './person.entity';

@Entity()
export class Author extends Person {

  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;

  @Column()
  declare email: string;

  @Column()
  nationality: string;
}
