import { UserDto } from './user.dto';

export class UpdateUserDto extends Omit<UserDto, 'posts' | 'id'>{}
