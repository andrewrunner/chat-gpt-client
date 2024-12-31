import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { jwtConfig } from 'src/config/getJwtConfig';

@Module({
  imports: [
    UserModule,
    JwtModule.register(jwtConfig)
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
