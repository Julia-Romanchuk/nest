import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany, ManyToOne} from 'typeorm';
import { Comments } from './comment.entity';
import { User } from './user.entity';

// entity - for creating table
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @JoinTable() // to specify the owner side of relationship
  // define type of relation to Comment table and pass few params to let TypeOrm
  // understand relationship
  // first -  establish type fo relation - function that returns a ref to related entity
  // second - specify column that refers for post from comment table (what is post inside of comment)
  @OneToMany(type => Comments, (comment) => comment.post)
  comments: string[]

  @ManyToOne(type => User, user => user.posts)
  author: User
}
