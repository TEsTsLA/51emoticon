import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule,server);
  await app.use(express.static('public', { maxAge: 7 * 24 * 60 * 60 * 1000 }))
  await app.listen(3001);
} 
bootstrap();
