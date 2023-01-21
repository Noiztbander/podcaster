import type { IPodcast } from "src/core/Itunes/domain/Podcasts";
import { IPodcastsRepository } from "src/core/Itunes/infra/PodcastsRepository";

export interface IPodcastsGetter {
  get(): Promise<IPodcast[]>;
}

export class PodcastsGetter implements IPodcastsGetter {
  constructor(private readonly repository: IPodcastsRepository) {}

  private fetchPodcasts = async (): Promise<IPodcast[]> => {
    const resp = await this.repository.get();

    return resp.feed.entry;
  };

  async get(): Promise<IPodcast[]> {
    return this.fetchPodcasts();
  }
}
