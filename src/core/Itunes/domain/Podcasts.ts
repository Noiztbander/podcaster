export enum WrapperTypeEnum {
  TRACK = 'track',
  EPISODE = 'podcastEpisode',
}

interface ITunesImage {
  label: string;
  attributes: { height: string };
}

export interface IpodcastDetail {
  wrapperType: WrapperTypeEnum.TRACK;
  collectionId: string;
}

export interface IEpisode {
  wrapperType: WrapperTypeEnum.EPISODE;
  trackTimeMillis: number;
  releaseDate: string;
  trackName: string;
  episodeUrl: string;
  trackId: number;
  description: string;
}

export interface IPodcastDetailRestApi {
  results: (IpodcastDetail | IEpisode)[];
}

export interface IPodcastRestApi {
  'im:name': { label: string };
  'im:image': ITunesImage[];
  'im:artist': { label: string };
  id: { attributes: { 'im:id': string } };
  summary: { label: string };
}

export interface Ipodcast {
  name: string;
  image: string;
  artist: string;
  id: string;
  summary: string;
}
