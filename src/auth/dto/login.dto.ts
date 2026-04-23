import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: 'Пошта користувача',
    example: 'user@email.com',
  })
  @IsString({ message: 'Пошта повинно бути рядком' })
  @IsEmail({}, { message: 'Невірний формат пошты' })
  @IsNotEmpty({ message: 'Пошта не може бути порожнім' })
  email!: string;

  @ApiProperty({
    description: 'Пароль користувача',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Пароль повинен бути рядком' })
  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  @Length(6, 128, { message: 'Пароль повинен бути від 6 до 128 символів' })
  password!: string;
}
