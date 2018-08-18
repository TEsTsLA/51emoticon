import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog } from './dog.interface';
import { CreateDogDto } from './create-dog.dto';

@Injectable()
export class DogsService {
  constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog>) {}

  async create(createdogDto: CreateDogDto): Promise<Dog> {
    const createddog = new this.dogModel(createdogDto);
    return await createddog.save();
  }
 
  async findAll(): Promise<Dog[]> {
    return await this.dogModel.find().exec();
  }
  async findOneById(id):Promise<Dog> {
    return await this.dogModel.findById(id).exec();
  }
  async findOne():Promise<Dog>{
    return await this.dogModel.findOne().exec()
  }
}