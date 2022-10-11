import { IsNumber, IsString, Max, Min } from 'class-validator'

export class AuthDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}
