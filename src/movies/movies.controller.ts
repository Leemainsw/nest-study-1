import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'all movies';
  }

  @Get('search')
  search(@Query('year') searchYear: string): string {
    return `title로 영화를 검색합니다. year: ${searchYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `${id} movie`;
  }

  @Post()
  create(@Body() movieData: any): string {
    return movieData;
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return `delete movie ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData: any): string {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
