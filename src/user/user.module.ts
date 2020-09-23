import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStorageService } from '../user-storage/user-storage.service';

// decorator that provide meta data to organize app structure:
// * controllers - API routes to instantiate
// * exports - list of providers of current module that should be made available
//    anywhere this module is imported
// * imports - list of required modules for this one
// * providers - list of services that need to be instantiated by the Nest injector
@Module({controllers: [UsersController], providers: [UserStorageService]})
export class UserModule {}
