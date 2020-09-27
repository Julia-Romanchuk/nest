import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus, NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UserStorageService } from '../user-storage/user-storage.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Controller('users') // specify the path controller responsible for '.../user'
export class UsersController {

  // here's the place of dependency injection, it achieve by looking at the type
  // so dependencies are resolved simply by their type, it resolve it by creating, or
  // according to SingleTone Pattern, return an existing instance
  constructor (
    @InjectRepository(User) // will generate repository for the service
    private readonly usersRepository: Repository<User>
  ) {
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED) // allow to set specific code to entire response
  getAll (@Query() pagination) {
    const { limit, page } = pagination;
    return this.usersRepository.find()
  }

  @Get(':id') // that's how we can extract params from the path
  async getOne(@Param('id') id: string) { // specify required param name
    const user = await this.usersRepository.findOne(id)
    if (!user) throw new NotFoundException( 'No user found');
    return user
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // create user instance based on dto
    const createdUser = this.usersRepository.create(createUserDto);
    // save new user entity in the db
    return this.usersRepository.save(createdUser)
  }

  @Patch(':id') // allow updating partial, not all obj like PUT does
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { // could pass few args
    // create new entity based on passed obj
    // looks if an entity is already exist in db
    // if exist - retrieves it and everything related to it and update with passed inf
    // and return undefined if nothing was found
    const user = await this.usersRepository.preload({ id: +id, ...updateUserDto })
    if (!user) throw new NotFoundException('No user found');
    // save changes to the db
    return this.usersRepository.save(user)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // findOne automatically throw not found error
    const user = await this.usersRepository.findOne(id)
    return this.usersRepository.remove(user)
  }
}
