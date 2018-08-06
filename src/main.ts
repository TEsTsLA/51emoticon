import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { resolve } from 'path';
// import * as cors from 'cors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, { 
    cors: true,
  });
  await app.use(express.static('public', { maxAge: 7 * 24 * 60 * 60 * 1000 }));
  // app.useStaticAssets(__dirname + '/public');
  await app.use(compression());
  await app.use(cookieParser());
  // app.enableCors();
  // await app.use(cors());
  app.setBaseViewsDir(resolve('src', 'views'));
  app.setViewEngine('hbs');
  // swagger
  const options = new DocumentBuilder()
    .setTitle('51emoticon api')
    .setDescription(' API description')
    .setVersion('1.0')
    .addTag('示例')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001, '0.0.0.0', () => {});
}
bootstrap();
