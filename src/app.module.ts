import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';
import { LayoutService } from './layout/layout.service';
import { ResourceModule } from './resource/resource.module';

@Module({
  imports: [LayoutModule, ResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {}
}
