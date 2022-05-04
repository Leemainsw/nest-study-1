import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // decorator가 없는 Property의 Object를 거르는 속성
      forbidNonWhitelisted: true,
      // 원하는 타입으로 변환
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
