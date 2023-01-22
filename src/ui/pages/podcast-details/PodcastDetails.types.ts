import { IEpisode } from '@/core/Itunes/domain/Podcasts';
import { ReactNode } from 'react';

export interface IPodcastContext {
  episodesList: IEpisode[];
}

export interface IPodcastProviderProps extends IPodcastContext {
  children: ReactNode;
}
