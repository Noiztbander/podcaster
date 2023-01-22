import type { Ipodcast } from 'src/core/Itunes/domain/Podcasts';
import { IPodcastRepository } from 'src/core/Itunes/infra/PodcastsRepository';
import { transformRestApiPodcastsDataToViewModel } from './transformers';

export interface IPodcastGetter {
  get(): Promise<Ipodcast[]>;
}

export class PodcastsGetter implements IPodcastGetter {
  constructor(private readonly repository: IPodcastRepository) {}

  private fetchPodcasts = async (): Promise<Ipodcast[]> => {
    const resp = await this.repository.get();

    const toModelView = transformRestApiPodcastsDataToViewModel(resp.feed.entry);

    return toModelView;
  };

  async get(): Promise<Ipodcast[]> {
    return this.fetchPodcasts();
  }
}
