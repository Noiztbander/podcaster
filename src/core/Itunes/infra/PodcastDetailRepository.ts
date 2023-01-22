import { IPodcastDetailRestApi } from 'src/core/Itunes/domain/Podcasts';
import type { Response } from 'src/core/types/Response';
import { ItunesAppleRequest } from './ItunesAppleRequest';

export interface IPodcastDetailRepository {
  get(_podcastId?: string): Promise<Response<IPodcastDetailRestApi[]>>;
}

export class PodcastDetailRepository implements IPodcastDetailRepository {
  async get(podcastId = ''): Promise<Response<IPodcastDetailRestApi[]>> {
    return ItunesAppleRequest(`/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=5`);
  }
}
