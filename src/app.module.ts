import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';
import { LayoutService } from './layout/layout.service';
import { ResourceModule } from './resource/resource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
@Module({
  imports: [LayoutModule, ResourceModule, TypeOrmModule.forRoot(),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {
    // console.log(connection)
  }
  public configure(consumer: MiddlewareConsumer): void {}
}

// {
//   type: 'mysql',
//   host: '47.91.228.137',
//   port: 3306,
//   username: 'root',
//   password: 'gp170000',
//   database: 'test',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
// }