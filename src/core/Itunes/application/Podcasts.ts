import type { Ipodcast } from "src/core/Itunes/domain/Podcasts";
import { IPodcastRestApisRepository } from "src/core/Itunes/infra/PodcastsRepository";
import { transformRestApiPodcastsDataToViewModel } from "./transformers";

export interface IPodcastRestApisGetter {
  get(): Promise<Ipodcast[]>;
}

export class PodcastsGetter implements IPodcastRestApisGetter {
  constructor(private readonly repository: IPodcastRestApisRepository) {}

  private fetchPodcasts = async (): Promise<Ipodcast[]> => {
    const resp = await this.repository.get();

    const toModelView = transformRestApiPodcastsDataToViewModel(
      resp.feed.entry
    );

    return toModelView;
  };

  async get(): Promise<Ipodcast[]> {
    return this.fetchPodcasts();
  }
}
