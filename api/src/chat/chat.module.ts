import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { GPTClientModule } from 'src/gpt-client/gpt-client.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './schemas/chat.schema';
import { ChatMessage, ChatMessageSchema } from './schemas/chat-message.schema';

@Module({
  imports:[
    GPTClientModule,
    MongooseModule.forFeature([
      { name: Chat.name, schema: ChatSchema },
      { name: ChatMessage.name, schema: ChatMessageSchema },
    ]),
  ],
  controllers: [ChatController],
  providers: [],
})
export class ChatModule {}
