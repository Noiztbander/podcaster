import { IEpisode, Ipodcast, IpodcastDetail, WrapperTypeEnum } from 'src/core/Itunes/domain/Podcasts';
import { IPodcastDetailRepository } from '@/core/Itunes/infra/PodcastDetailRepository';

interface fetchPodcastDetailsProps {
  podcastId: string;
}

export interface IPodcastDetailGetter {
  get(podcastId: string): Promise<Ipodcast[]>;
}

export class PodcastDetailGetter implements IPodcastDetailGetter {
  constructor(private readonly repository: IPodcastDetailRepository) {}

  private fetchPodcastDetail = async ({ podcastId }: fetchPodcastDetailsProps): Promise<Ipodcast[]> => {
    const resp = await this.repository.get(podcastId);
    const episodesFromPodcast = resp.results.filter(
      (episodes: IpodcastDetail | IEpisode) => episodes.wrapperType !== WrapperTypeEnum.TRACK
    );

    return episodesFromPodcast;
  };

  async get(podcastId: string): Promise<Ipodcast[]> {
    return this.fetchPodcastDetail({ podcastId });
  }
}
