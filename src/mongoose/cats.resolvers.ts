import { Injectable, UseGuards } from '@nestjs/common';
import {
  Query,
  Mutation,
  Resolver,
  DelegateProperty,
  Subscription,
  ResolveProperty,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { CatsGuard } from './cats.guard';
import { DogsService } from './dogs.service';

const pubSub = new PubSub();

@Resolver('Cat')
export class CatsResolvers {
  constructor(
    private readonly catsService: CatsService,
    private readonly dogsService: DogsService,
  ) {}

  @Query()
  @UseGuards(CatsGuard)
  async getCats(obj, args, context, info) {
    return await this.catsService.findAll();
  }

  @Query('cat')
  async findOneById(obj, args, context, info): Promise<Cat> {
    const { id } = args;
    return await this.catsService.findOneById(id);
  }


  @Mutation('createCat')
  async create(obj, args: Cat, context, info): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    // pubSub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Subscription('catCreated')
  catCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('catCreated'),
    };
  }
  @ResolveProperty('dog')
  async getDog(){
    return await this.dogsService.findAll()
  }
}