import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Authorization with JWT')
    .setDescription('The authorization API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
}
