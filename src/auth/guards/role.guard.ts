import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../../../generated/prisma/enums';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Request } from 'express';
import { User } from '../../../generated/prisma/client';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles?.length) return true;

    const request = context.switchToHttp().getRequest<Request>();

    const user = request.user as User;

    if (!requiredRoles.includes(user.role) || !user) {
      throw new ForbiddenException();
    }

    return true;
  }
}
