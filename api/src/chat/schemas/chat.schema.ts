import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ChatMessage } from './chat-message.schema';

@Schema()
export class Chat {

  @Prop()
  title: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage' }] })
  messages:[ChatMessage]
}

export type ChatDocument = HydratedDocument<Chat>;
export const ChatSchema = SchemaFactory.createForClass(Chat);
