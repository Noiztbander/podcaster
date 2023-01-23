import { Ipodcast, IPodcastRestApi } from '../domain/Podcasts';

export const transformRestApiPodcastsDataToViewModel = (podcasts?: Array<IPodcastRestApi>) => {
  if (!podcasts) return [];
  const filteredData = new Set(podcasts.map((podcast: IPodcastRestApi) => presenterPodcastsDataToViewModel(podcast)));

  return [...filteredData] as Array<Ipodcast>;
};

export const presenterPodcastsDataToViewModel = (podcast: IPodcastRestApi): Ipodcast => {
  const toPodcastModel: Ipodcast = {
    id: podcast.id.attributes['im:id'],
    name: podcast['im:name'].label,
    summary: podcast.summary.label,
    image: podcast['im:image'][2].label ?? '',
    artist: podcast['im:artist'].label,
  };
  return toPodcastModel;
};
