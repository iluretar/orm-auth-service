import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

  @GrpcMethod('AuthService')
  createUser(authCredentialsDto: AuthCredentialsDto): AuthCredentialsDto {
    const { username, password } = authCredentialsDto
    if (username === 'string') throw new  RpcException({ code: 5, message: 'Wrong Credentials' })
    return authCredentialsDto
  }
}
