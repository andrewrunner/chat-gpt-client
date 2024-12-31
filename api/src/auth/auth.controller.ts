import { Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SigmUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}



    @HttpCode(HttpStatus.OK)
    @Post('sing-up')
    async singUp(@Body() signUpDto: SigmUpDto) {
        return this.authService.signUp(signUpDto);
    }

    @Post('sing-in')
    async signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
      return req.user;
    }
}
