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
  ) { }

  postData = [
    { id: '1', imageUrl: 'http://localhost:3001/img/layout/carousel/swipe-01.jpg', description: '/swipe-01.jpg' },
    { id: '2', imageUrl: 'http://localhost:3001/img/layout/carousel/swipe-02.jpg', description: '/swipe-02.jpg' },
    { id: '3', imageUrl: 'http://localhost:3001/img/layout/carousel/swipe-03.jpg', description: '/swipe-03.jpg' }
  ]

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
    pubSub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Subscription('catCreated')
  catCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('catCreated'),
    };
  }
  @ResolveProperty('dog')
  async getDog() {
    return await this.dogsService.findAll()
  }
  @Query()
  allPosts(obj, args, context, info) {
    return this.postData
  }
  @Mutation('createPost')
  createPost(obj, args, context, info) {
    let result = {
      id: (this.postData.length+1).toString(),
      imageUrl: args.imageUrl,
      description: args.description,
    } 
    this.postData.push(result)
    return result
  } 
  @Subscription('Post') 
  Post(){
    return { 
      subscribe: () => pubSub.asyncIterator('Post')
    }
  }
}