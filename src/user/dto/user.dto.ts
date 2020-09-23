import { UserRoleEnum } from '../../contracts/user-role.enum';

export class UserDto {
  id: string;
  name: string;
  email: string;
  role: UserRoleEnum;
  posts: Array<any>
}
