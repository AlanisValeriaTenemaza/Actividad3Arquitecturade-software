import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly service: AuthorsService) {}

  @Post()
  create(@Body() author: Author) {
    return this.service.create(author);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
