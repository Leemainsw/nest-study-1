import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie | NotFoundException {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) throw new NotFoundException(`Movie With ID ${id} Not Found`);
    return movie;
  }

  deleteOne(id: string): void {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData: any) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData: any): void {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
