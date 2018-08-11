import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceModule } from './modules/resource/resource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LayoutModule } from './modules/layout/layout.module';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { ApolloServer,gql } from 'apollo-server-express';
import { EventsModule } from './modules/events/events.module';
import { MathModule } from './microservices/math/math.module';
import { HeroModule } from './rpc/hero.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './mongoose/cats.module';
@Module({
  imports: [LayoutModule, ResourceModule,EventsModule, 
    TypeOrmModule.forRoot(),GraphQLModule,
    MathModule,HeroModule,CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection,
    private readonly graphQLFactory: GraphQLFactory) {
    // console.log(connection)
  }
  configureGraphQL(app: any) {
    // Same as nestjs docs - graphql guide
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    const schema = this.graphQLFactory.createSchema({ typeDefs });

    // this changed. Apollo lib internally apply app.use(...)
    // and other middlewares to work
    // but it needs app object
    const server = new ApolloServer({ schema });
    const path = '/graphql'
    server.applyMiddleware({ app, path });
  }
  public configure(consumer: MiddlewareConsumer): void {
    // consumer.apply(this.configureGraphQL).forRoutes('/graphql');
  }
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
