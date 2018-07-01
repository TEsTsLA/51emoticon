import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';
import { LayoutService } from './layout/layout.service';

@Module({
  imports: [LayoutModule],
  controllers: [AppController],
  providers: [AppService, LayoutService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {}
}
