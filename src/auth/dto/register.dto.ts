import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterRequest {
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

  @ApiProperty({
    description: "Ім'я користувача",
    example: 'Artem',
    minLength: 2,
    maxLength: 50,
  })
  @IsString({ message: "Ім'я повинно бути рядком" })
  @Length(2, 50, { message: "Ім'я повинно бути від 2 до 50 символів" })
  @IsNotEmpty({ message: "Ім'я не може бути порожнім" })
  name!: string;
}
