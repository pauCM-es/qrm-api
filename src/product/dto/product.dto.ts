import { IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';

export class ProductDto {
  @IsString()
  @Length(3, 3, { message: 'Code must have 3 characters.' })
  @IsNotEmpty()
  code: string;

  @IsString()
  @MaxLength(20, { message: 'Name must not surpass 20 characters.' })
  @IsNotEmpty()
  name: string;
}

export type UpdateProductDto = Partial<ProductDto>;
