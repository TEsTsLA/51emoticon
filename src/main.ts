import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule,server);
  await app.use(express.static('public', { maxAge: 7 * 24 * 60 * 60 * 1000 }))
  await app.use(compression());
	await app.use(cookieParser());
  await app.listen(3001);
} 
bootstrap();
