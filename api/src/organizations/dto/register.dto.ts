import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  email!: string;

  @Matches(/^(\+254|0)[17]\d{8}$/)
  phone!: string;

  @Matches(/^\d{8}$/)
  nationalId!: string;

  @MinLength(8)
  password!: string;
}
