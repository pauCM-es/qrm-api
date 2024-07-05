import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakController } from './keycloak.controller';
import { KeycloakUserService } from './keycloak-user.service';
import { KeycloakConfigService } from 'src/config/keycloak-config.service';
import { ConfigModules } from 'src/config/config.module';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [ConfigModules],
    }),
  ],
  controllers: [AppController, KeycloakController],
  providers: [
    KeycloakUserService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    AppService,
  ],
})
export class KeycloakModule {}
