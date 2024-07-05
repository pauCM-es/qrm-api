import { Injectable } from '@nestjs/common';

@Injectable()
export class KeycloakUserService {
  getHello(): string {
    return 'Hello from keycloak controller';
  }
}
