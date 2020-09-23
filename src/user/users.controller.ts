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

@Controller('users') // specify the path controller responsible for '.../user'
export class UsersController {

  // here's the place of dependency injection, it achieve by looking at the type
  // so dependencies are resolved simply by their type, it resolve it by creating, or
  // according to SingleTone Pattern, return an existing instance
  constructor (private readonly userStorageService: UserStorageService) {
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED) // allow to set specific code to entire response
  getAll (@Query() pagination) {
    const { limit, page } = pagination;
    // generate readable error object {message, statusCode}
    if (false) throw new HttpException('Error message', 404)
    // there are also another common error exception {message, statusCode, error}
    if (false) throw new NotFoundException('Error message')
    return `There are ${limit} users on page ${page}`
  }

  @Get(':id') // that's how we can extract params from the path
  getOne(@Param('id') id: string) { // specify required param name
  // getOne(@Param() params) { // get obj with all existing params
    return 'Concrete user'
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto
  }

  @Patch(':id') // allow updating partial, not all obj like PUT does
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { // could pass few args
  // update(@Body('name') userInput) { // to extract some props
    return updateUserDto
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `User ${id} removed`
  }
}
