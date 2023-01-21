interface ITunesImage {
  label: string;
  attributes: { height: string };
}

export interface IPodcast {
  "im:name": { label: string };
  "im:image": ITunesImage[];
  summary: string;
  title: { label: string };
  "im:artist": { label: string };
}
