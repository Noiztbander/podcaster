import { Ipodcast } from '@/core/Itunes/domain/Podcasts';
import Header from '@/ui/components/header/Header';
import useInputFilter from '@/ui/hook/useInputFilter';
import { localStorageEnum } from '@/ui/types/localStorage.types';
import { updateStorage } from '@/ui/utils/storage.utils';
import { useContext, useEffect, useState } from 'react';
import InputFilter from './components/podcast-card/input-filter/InputFilter';
import PodcastCard from './components/podcast-card/PodcastCard';

import HomeContext from './context/HomeContext';
import styles from './home.module.scss';
import { IHomeContext } from './Home.types';

export default function Home() {
  const { podcasts = [] } = useContext(HomeContext) as IHomeContext;
  const [query, setQuery] = useState('');

  useEffect(() => {
    updateStorage({ [localStorageEnum.TOPPODCASTS]: podcasts });
  }, [podcasts]);

  const { filteredPodcasts } = useInputFilter({ query });

  return (
    <main>
      <Header />
      <InputFilter setQuery={setQuery} podcastQuantity={filteredPodcasts.length} />
      <section className={styles.podcastSection}>
        {filteredPodcasts.map((podcast: Ipodcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </section>
    </main>
  );
}
