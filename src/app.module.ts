import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeycloakModule } from './keycloak/keycloak.module';
import { KeycloakController } from './keycloak/keycloak.controller';
import { KeycloakUserService } from './keycloak/keycloak-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      // port: +process.env.API_DB_PORT,
      // password: process.env.API_DB_PASSWORD,
      // usernae: process.env.API_DB_USER,
      port: 5434,
      password: 'admin',
      username: 'admin',
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      verboseRetryLog: true,
      database: 'qrmdb',
      synchronize: true,
      logging: true,
    }),
    ConfigModule.forRoot(),
    KeycloakModule,
    ProductModule,
  ],
  controllers: [AppController, KeycloakController],
  providers: [AppService, KeycloakUserService],
})
export class AppModule {}
