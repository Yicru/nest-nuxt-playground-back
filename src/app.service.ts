import { HttpService, Injectable } from '@nestjs/common';
import { User } from './app.interface';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private readonly tmdbToken: string;

  constructor(config: ConfigService, private readonly http: HttpService) {
    this.tmdbToken = config.get('TMDB_API_TOKEN');
  }

  getProfile(): User[] {
    return [
      {
        id: 3,
        name: '雄一朗',
        age: 24,
      },
      {
        id: 4,
        name: '雄二朗',
        age: 21,
      },
    ];
  }

  getMovies(): any {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.tmdbToken}`)
      .toPromise()
      .then(res => res.data)
      .catch(e => e);
  }
}
