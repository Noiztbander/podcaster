import { IPodcastRestApi } from 'src/core/Itunes/domain/Podcasts';
import type { Response } from 'src/core/types/Response';
import { ItunesAppleRequest } from './ItunesAppleRequest';

export interface IPodcastRepository {
  get(_filters?: string): Promise<Response<IPodcastRestApi[]>>;
}

export class PodcastsRepository implements IPodcastRepository {
  async get(filters = ''): Promise<Response<IPodcastRestApi[]>> {
    return ItunesAppleRequest(`/us/rss/toppodcasts/limit=100/genre=1310/json?${filters}`);
  }
}
