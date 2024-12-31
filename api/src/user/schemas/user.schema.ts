import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Chat } from 'src/chat/schemas/chat.schema';

@Schema()
export class User {

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  password:string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }] })
  chats:[Chat]
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
