import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: 25 * 1024 * 1024 }));
  app.use(urlencoded({ limit: 25 * 1024 * 1024, extended: true }));
  await app.listen(4400);
}
bootstrap();
