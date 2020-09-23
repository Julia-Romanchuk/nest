import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './user/users.controller';
import { UserStorageService } from './user-storage/user-storage.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UserStorageService],
})
export class AppModule {}
