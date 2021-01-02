import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/item.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ItemsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
     }),
     MongooseModule.forRoot('mongodb://localhost/myapp')
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
