import { UserRoleEnum } from '../contracts/user-role.enum';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany} from 'typeorm';
import { Post } from './post.entity';

// @Entity() each Entity class represents a SQL table with the same name as our class name
@Entity('users') // we could specify another name of table
export class User {
  @PrimaryGeneratedColumn() // create primary key column
  id: number;

  @Column() // create ordinary column that not nullable by default
  name: string;

  @Column()
  email: string;

  @Column()
  role: UserRoleEnum;

  @JoinTable() // to specify the owner side of relationship (User here)
  @OneToMany(type => Post, post => post.author)
  posts: string[]
}
