import { IPodcastRestApi } from "src/core/Itunes/domain/Podcasts";
import type { Response } from "src/core/types/Response";
import { TopPodcastsRequest } from "./TopPodcastsRequest";

export interface IPodcastRestApisRepository {
  get(_filters?: string): Promise<Response<IPodcastRestApi[]>>;
}

export class PodcastsRepository implements IPodcastRestApisRepository {
  async get(filters = ""): Promise<Response<IPodcastRestApi[]>> {
    return TopPodcastsRequest(
      `/us/rss/toppodcasts/limit=100/genre=1310/json?${filters}`
    );
  }
}
