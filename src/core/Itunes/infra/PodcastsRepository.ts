import { IPodcast } from "src/core/Itunes/domain/Podcasts";
import type { Response } from "src/core/types/Response";
import { TopPodcastsRequest } from "./TopPodcastsRequest";

export interface IPodcastsRepository {
  get(_filters?: string): Promise<Response<IPodcast[]>>;
}

export class PodcastsRepository implements IPodcastsRepository {
  async get(filters = ""): Promise<Response<IPodcast[]>> {
    return TopPodcastsRequest(
      `/us/rss/toppodcasts/limit=100/genre=1310/json?${filters}`
    );
  }
}
