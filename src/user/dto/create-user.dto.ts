import { UserDto } from './user.dto';

export class CreateUserDto extends Omit<UserDto, 'posts' | 'id'>{}
