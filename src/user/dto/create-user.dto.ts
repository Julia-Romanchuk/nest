import { IsString } from 'class-validator';
import { UserRoleEnum } from '../../contracts/user-role.enum';

export class CreateUserDto {
  // will generate an error response if field id invalid with correct message for
  // every wring field
  @IsString()
  readonly  name: string;

  @IsString()
  readonly  email: string;

  @IsString()
  readonly  role: UserRoleEnum;
}

