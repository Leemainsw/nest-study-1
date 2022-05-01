import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `${id} movie`;
  }

  @Post()
  create(): string {
    return 'create movie';
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return `delete movie ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string): string {
    return `patch movie ${id}`;
  }
}
