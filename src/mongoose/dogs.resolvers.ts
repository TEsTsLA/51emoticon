import { Injectable, UseGuards } from '@nestjs/common';
import {
  Query,
  Mutation,
  Resolver,
  DelegateProperty,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { Dog } from './dog.interface';
import { DogsService } from './dogs.service';

const pubSub = new PubSub();

@Resolver()
export class dogsResolvers {
  constructor(private readonly dogsService: DogsService) {}

  @Query() 
  // @UseGuards(dogsGuard)
  async getDogs(obj, args, context, info) {
    return await this.dogsService.findAll();
  }
  @Query()
  async dog(){
    return await this.dogsService.findOne() 
  }

  // @Query('dog')
  // async findOneById(obj, args, context, info): Promise<Dog> {
  //   const { id } = args;
  //   return await this.dogsService.findOneById(id);
  // }
  
}