interface ITunesImage {
  label: string;
  attributes: { height: string };
}

export interface IPodcastRestApi {
  "im:name": { label: string };
  "im:image": ITunesImage[];
  summary: { label: string };
  title: { label: string };
  "im:artist": { label: string };
  id: { attributes: { "im:id": string } };
}

export interface Ipodcast {
  name: string;
  image: string;
  title: string;
  artist: string;
  id: string;
  summary: string;
}
