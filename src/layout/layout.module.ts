import { LayoutService } from './layout.service';
import { Module } from '@nestjs/common';
import { LayoutController } from './layout.controller';
import { Photo } from './layout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [LayoutController],
  providers: [LayoutService],
})
export class LayoutModule {}
