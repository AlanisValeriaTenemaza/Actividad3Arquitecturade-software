import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { Author } from './authors/entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
       type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Author],
      synchronize: true,
      
    }),
    AuthorsModule,
  ],
})
export class AppModule {}
