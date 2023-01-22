import { Ipodcast } from '@/core/Itunes/domain/Podcasts';
import Header from '@/ui/components/header/Header';
import { localStorageEnum } from '@/ui/types/localStorage.types';
import { updateStorage } from '@/ui/utils/storage.utils';
import { useContext, useEffect } from 'react';
import PodcastCard from './components/podcast-card/PodcastCard';

import HomeContext from './context/HomeContext';
import styles from './home.module.scss';
import { IHomeContext } from './Home.types';

export default function Home() {
  const { podcasts } = useContext(HomeContext) as IHomeContext;

  useEffect(() => {
    updateStorage({ [localStorageEnum.TOPPODCASTS]: podcasts });
  }, [podcasts]);

  return (
    <main>
      <Header />
      <section className={styles.filterSection}>
        <div className={styles.podcastCounter}>
          <h3>100</h3>
        </div>

        <label htmlFor="filter-podcasts">
          <input type="text" id="filter-podcasts" name="filter-podcasts" placeholder="Filter podcasts..." />
        </label>
      </section>
      <section className={styles.podcastSection}>
        {podcasts.map((podcast: Ipodcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </section>
    </main>
  );
}
