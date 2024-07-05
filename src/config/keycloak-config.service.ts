import { Injectable } from '@nestjs/common';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: process.env.KC_AUTH_SERVER_URL,
      realm: process.env.KC_REALM,
      clientId: process.env.KC_CLIENT_ID,
      secret: process.env.KC_CLIENT_SECRET_KEY,
      bearerOnly: true,
      realmPublicKey: process.env.KC_PUBLIC_KEY,
      cookieKey: 'KEYCLOAK_JWT',
      logLevels: ['verbose'],
      useNestLogger: false,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
      public: false,
      resource: process.env.KC_CLIENT_ID,
    };
  }
}
