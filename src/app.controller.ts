import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProfile(): User[] {
    return this.appService.getProfile();
  }

  @Get('movies')
  getMovies(): any {
    return this.appService.getMovies();
  }
}
