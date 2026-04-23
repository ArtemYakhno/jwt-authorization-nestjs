/* eslint-disable @typescript-eslint/require-await */
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export async function getJwtConfig(
  configService: ConfigService,
): Promise<JwtModuleOptions> {
  const secret =
    configService.get<string>('JWT_SECRET') || process.env.JWT_SECRET; // ← fallback напряму до process.env

  if (!secret) {
    throw new Error(
      `JWT_SECRET is undefined! All env keys: ${Object.keys(process.env).join(', ')}`,
    );
  }

  return {
    secret: secret,
    signOptions: {
      algorithm: 'HS256',
    },
    verifyOptions: {
      algorithms: ['HS256'],
      ignoreExpiration: false,
    },
  };
}
