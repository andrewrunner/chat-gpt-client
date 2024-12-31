import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class ChatMessage {

  @Prop()
  title: string;

}

export type ChatMessageDocument = HydratedDocument<ChatMessage>;
export const ChatMessageSchema = SchemaFactory.createForClass(ChatMessage);
