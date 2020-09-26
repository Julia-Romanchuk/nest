import { UserRoleEnum } from '../../contracts/user-role.enum';
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

// @Entity() each Entity class represents a SQL table with the same name as our class name
@Entity('users') // we could specify another name of table
export class User {

  @PrimaryGeneratedColumn() // create primary key column
  id: string;

  @Column() // create ordinary column that not nullable by default
  name: string;

  @Column()
  email: string;

  @Column()
  role: UserRoleEnum;

  @Column('json', { nullable: true })
  posts: Array<any>
}
