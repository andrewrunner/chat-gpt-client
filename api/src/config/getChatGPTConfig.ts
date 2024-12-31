import { ConfigModule, ConfigService } from '@nestjs/config';

export const getChatGPTConfig = ():any => ({
    useFactory: (configService: ConfigService) => ({
        gpt_token: configService.get<string>('GPT_TOKEN'),
    }),
    inject: [ConfigService],
    imports: [ConfigModule],
})
