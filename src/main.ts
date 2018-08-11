import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { resolve } from 'path';
// import * as cors from 'cors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { grpcClientOptions } from './rpc/grpc-client.options';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, { 
    cors: true,
  });
  // TCP-微服务
  // app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     retryAttempts:5,
  //     retryDelay:300,
  //   }
  // })
  // RPC - 微服务
  app.connectMicroservice(grpcClientOptions)

  await app.startAllMicroservicesAsync();
  
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
  app.useGlobalPipes(new ValidationPipe());

  // With Nestjs context get the app module to call our configure method
  const appModule = app.get(AppModule);
  appModule.configureGraphQL(app);


  await app.listen(3001, '0.0.0.0', () => {});
}
bootstrap();
