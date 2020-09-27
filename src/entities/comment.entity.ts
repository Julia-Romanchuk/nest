import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(type => Post, (post) => post.comments)
  post: Post

  @JoinTable()
  @ManyToOne(type => User, user => user.id)
  author: string
}