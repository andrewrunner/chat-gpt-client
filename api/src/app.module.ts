import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { GPTClientModule } from './gpt-client/gpt-client.module';
import { getChatGPTConfig } from './config/getChatGPTConfig';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './config/getMongoConfig';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env', isGlobal:true }),
    GPTClientModule.forRootAsync(getChatGPTConfig()),
    MongooseModule.forRootAsync(getMongoConfig()),

    AuthModule, 
    ChatModule, 
    UserModule, 
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
