import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'Access токен',
    example: 'sdgsd425dgdsg25ew..',
  })
  accessToken!: string;
}
