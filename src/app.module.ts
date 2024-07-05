import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeycloakModule } from './keycloak/keycloak.module';
import { KeycloakController } from './keycloak/keycloak.controller';
import { KeycloakUserService } from './keycloak/keycloak-user.service';

@Module({
  imports: [ConfigModule.forRoot(), KeycloakModule],
  controllers: [AppController, KeycloakController],
  providers: [AppService, KeycloakUserService],
})
export class AppModule {}
