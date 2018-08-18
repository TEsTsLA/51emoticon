
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './cat.schema';
import { CatsResolvers } from './cats.resolvers';
import { DogSchema } from './dog.schema';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { dogsResolvers } from './dogs.resolvers';
import { AuthorResolver } from './author.resolvers';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Cat', schema: CatSchema },
    { name: 'Dog', schema: DogSchema }
  ])],
  controllers: [CatsController,DogsController],
  providers: [CatsService,DogsService,
      CatsResolvers,dogsResolvers,AuthorResolver],
})
export class CatsModule {}