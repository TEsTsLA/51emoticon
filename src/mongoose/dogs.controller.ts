import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateDogDto } from './create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './dog.interface';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  async create(@Body() createdogDto: CreateDogDto) {
    this.dogsService.create(createdogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }
}