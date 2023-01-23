import { Ipodcast } from '@/core/Itunes/domain/Podcasts';
import { useEffect, useState } from 'react';
import { onlyLettersAndNumbers } from '../utils/filter.utils';
import useLocalStorage from './useLocalStorage';

const useInputFilter = ({ query = '' }: { query: string }) => {
  const { topPodcasts } = useLocalStorage();
  const [searchInput, setSearchInput] = useState('');
  const [filteredPodcasts, setFilteredpodcasts] = useState<Ipodcast[]>(topPodcasts);

  const inputFilter = query.trim();

  useEffect(() => {
    if (topPodcasts && !query && inputFilter === '') setFilteredpodcasts(topPodcasts);
  }, [topPodcasts]);

  if (inputFilter !== searchInput) {
    setSearchInput(inputFilter);
    setFilteredpodcasts(() => {
      if (!inputFilter || inputFilter === '') return topPodcasts;
      return topPodcasts.filter(({ artist, name }) => {
        if (typeof artist === 'string' && typeof name === 'string' && onlyLettersAndNumbers(inputFilter)) {
          return (
            artist.toLowerCase().match(inputFilter.toLowerCase()) || name.toLowerCase().match(inputFilter.toLowerCase())
          );
        }
        return artist === inputFilter || name === inputFilter;
      });
    });
  }

  return { filteredPodcasts };
};
export default useInputFilter;
