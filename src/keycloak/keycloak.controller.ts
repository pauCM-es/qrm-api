import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Res,
  UseGuards,
} from '@nestjs/common';
import { KeycloakUserService } from './keycloak-user.service';
import {
  Public,
  RoleGuard,
  RoleMatchingMode,
  Roles,
  Unprotected,
} from 'nest-keycloak-connect';
import { GetTokenData } from './keycloak.dtos';

@Controller('keycloak')
export class KeycloakController {
  constructor(private readonly userService: KeycloakUserService) {}

  @Get()
  getpublic(): string {
    return `${this.userService.getHello()}`;
  }

  @Get('/user')
  @Roles({ roles: ['realm_user'] })
  getUser(): string {
    return `${this.userService.getHello()} from user`;
  }

  @Get('/admin')
  @Roles({ roles: ['realm_admin'] })
  getAdmin(): string {
    return `${this.userService.getHello()} from admin`;
  }

  @Get('/all')
  @Unprotected()
  async getAll(): Promise<string> {
    return 'from all';
  }
}
