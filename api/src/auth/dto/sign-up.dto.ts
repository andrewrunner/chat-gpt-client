import { IsEmail, IsString, MinLength, Matches  } from "class-validator";

export class SigmUpDto {

    @IsString()
    firstname: string   
    
    @IsString()
    lastname: string 

    @IsEmail()
    email: string 

    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password must contain at least 1 upper case letter,  1 lower case letter, 1 number or special character",
    })
    password:string
}