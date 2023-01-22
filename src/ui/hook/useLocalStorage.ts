import { IEpisode, Ipodcast } from '@/core/Itunes/domain/Podcasts';
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

const useLocalStorage = () => {
  const [podcast, setPodcastInfo] = useState<Ipodcast>(INITIAL_PODCAST);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [topPodcasts, setTopPodcasts] = useState<Ipodcast[] | []>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const {
        [localStorageEnum.SELECTED_PODCAST]: storedPodcast,
        [localStorageEnum.EPISODES]: storedEpisodes,
        [localStorageEnum.TOPPODCASTS]: storedTopPodcasts,
      } = getStorage() as {
        selectedPodcast: Ipodcast;
        episodes: IEpisode[];
        top100Podcasts: Ipodcast[];
      };

      setPodcastInfo(storedPodcast);
      setEpisodes(storedEpisodes);
      setTopPodcasts(storedTopPodcasts);
    }
  }, [typeof window]);

  return { podcast, episodes, topPodcasts };
};
export default useLocalStorage;
