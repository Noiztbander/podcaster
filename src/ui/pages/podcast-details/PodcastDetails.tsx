import { useContext, useEffect } from 'react';
import PodcastContext from './context/PodcastContext';
import { IPodcastContext } from './PodcastDetails.types';
import styles from './PodcastDetails.module.scss';
import Header from '@/ui/components/header/Header';
import { getStorage, updateStorage } from '@/ui/utils/storage.utils';
import { localStorageEnum } from '@/ui/types/localStorage.types';

export default function PodcastDetails() {
  const { episodesList } = useContext(PodcastContext) as IPodcastContext;
  useEffect(() => {
    updateStorage({ [localStorageEnum.EPISODES]: episodesList });
  }, [episodesList]);

  const { [localStorageEnum.SELECTED_PODCAST]: podcastInfo } = getStorage();

  console.log(podcastInfo);

  return (
    <main>
      <Header />
      <div className={styles.PageContainer}>
        <section className={styles.podcastSection}>podcast detail</section>
        <section className={styles.episodesListSection}>podcast List</section>
      </div>
    </main>
  );
}
