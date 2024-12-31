import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SigmUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async signUp(signUpDto: SigmUpDto) {
        const newUser = await this.usersService.create(signUpDto.firstname, signUpDto.lastname, signUpDto.email, signUpDto.password);

        const payload = { 
             email: newUser.email, 
         };
 
         return {
            user:newUser,   
            access_token: await this.jwtService.signAsync(payload),
         };
    }

    async signIn(email: string, pass: string): Promise<any> {
        
        const user = await this.usersService.findOne(email);
        
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { 
           // sub: user.userId, 
            email: user.email, 
        };

        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    }
}
