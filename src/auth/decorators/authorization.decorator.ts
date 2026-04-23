import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { Roles } from '../../../generated/prisma/enums';
import { RolesDecorator } from './roles.decorator';

export function Authorization(...roles: Roles[]) {
  return applyDecorators(
    RolesDecorator(...roles),
    UseGuards(JwtGuard, RoleGuard),
  );
}
