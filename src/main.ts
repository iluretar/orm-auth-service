import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  
   const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '127.0.0.1:3001',
      package: 'auth',
      protoPath: join(__dirname, './auth/auth.proto'),
    }
   });
   await app.listenAsync();
  
   
}
bootstrap();
