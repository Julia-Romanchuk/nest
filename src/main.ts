import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // force entire app use validation
  app.useGlobalPipes(new ValidationPipe({
    // remove all properties extra, unneeded fields, leave only described in DTO
    whitelist: true,
    // throw an error if any unneeded fields was received and told what cause problem
    forbidNonWhitelisted: true,
    // transform all incoming obj to a DTO objects
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }))
  await app.listen(3000);
}
bootstrap();
