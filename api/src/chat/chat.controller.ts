import { Controller, Get, Inject } from '@nestjs/common';
import { GPTClientService } from 'src/gpt-client/gpt-clent.service';

@Controller('chat')
export class ChatController {

    constructor(
        @Inject(GPTClientService) private readonly gptClient: GPTClientService
    ) {}

    @Get('send')
    async sendMessage() {
        const response = await this.gptClient.send('simple message')
        return response;
    }
}
