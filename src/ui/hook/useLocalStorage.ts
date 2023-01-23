import { IEpisode, Ipodcast, WrapperTypeEnum } from '@/core/Itunes/domain/Podcasts';
import { useEffect, useState } from 'react';
import { localStorageEnum } from '../types/localStorage.types';
import { getStorage } from '../utils/storage.utils';

const INITIAL_PODCAST = {
  name: '',
  image: '',
  artist: '',
  id: '',
  summary: '',
};

const INITIAL_EPISODE = {
  wrapperType: 'podcastEpisode' as WrapperTypeEnum.EPISODE,
  trackTimeMillis: 0,
  releaseDate: '',
  trackName: '',
  episodeUrl: '',
  trackId: 0,
  description: '',
};

const useLocalStorage = () => {
  const [podcast, setPodcastInfo] = useState<Ipodcast>(INITIAL_PODCAST);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [topPodcasts, setTopPodcasts] = useState<Ipodcast[] | []>([]);
  const [episode, setEpisode] = useState<IEpisode>(INITIAL_EPISODE);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const {
        [localStorageEnum.SELECTED_PODCAST]: storedPodcast,
        [localStorageEnum.EPISODES]: storedEpisodes,
        [localStorageEnum.TOPPODCASTS]: storedTopPodcasts,
        [localStorageEnum.SELECTED_EPISODE]: storedEpisode,
      } = getStorage() as {
        selectedPodcast: Ipodcast;
        episodes: IEpisode[];
        top100Podcasts: Ipodcast[];
        selectedEpisode: IEpisode;
      };

      setPodcastInfo(storedPodcast);
      setEpisodes(storedEpisodes);
      setTopPodcasts(storedTopPodcasts);
      setEpisode(storedEpisode);
    }
  }, [typeof window]);

  return { podcast, episodes, topPodcasts, episode };
};
export default useLocalStorage;
