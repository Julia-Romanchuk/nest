import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional() // no error will be thrown if its absent
  @IsPositive()
  // to parse incoming value as a number, but we could avoid this conversion by
  // setting global option transformOptions.enableImplicitConversion: true enable
  // implicit type conversion, so we dont have to specify @Type
  // @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;

}
