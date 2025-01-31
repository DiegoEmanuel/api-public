import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './developers/developers.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', //tipo de banco de dados
      database: 'db', //nome do banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //pra pegar todas as entidades
      synchronize: true, //pra criar o banco de dados automaticamente
    }),

    DevelopersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
