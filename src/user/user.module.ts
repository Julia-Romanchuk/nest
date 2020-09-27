import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStorageService } from '../user-storage/user-storage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Post } from '../entities/post.entity';
import { Comments } from '../entities/comment.entity';

// decorator that provide meta data to organize app structure:
// * controllers - API routes to instantiate
// * exports - list of providers of current module that should be made available
//    anywhere this module is imported
// * imports - list of required modules for this one
// * providers - list of services that need to be instantiated by the Nest injector
@Module({
  // register User entity in the app, as we deal with this entity inside of this
  // module, we should to make TypeOrm aware of this entity here
  imports: [
    // register TypeOrm in this module by .forFeature, and pass arr of entities
    TypeOrmModule.forFeature([User, Post, Comments])
  ],
  controllers: [UsersController],
  providers: [UserStorageService]
})
export class UserModule {}
