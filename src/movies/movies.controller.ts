import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie | NotFoundException {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: any) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData: any): string | void {
    return this.moviesService.update(id, updateData);
  }
}
