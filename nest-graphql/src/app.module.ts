import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [ItemsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
     })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
