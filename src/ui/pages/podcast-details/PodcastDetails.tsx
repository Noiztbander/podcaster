import { useContext, useEffect } from 'react';
import PodcastContext from './context/PodcastContext';
import { IPodcastContext } from './PodcastDetails.types';
import styles from './PodcastDetails.module.scss';
import Header from '@/ui/components/header/Header';
import { updateStorage } from '@/ui/utils/storage.utils';
import { localStorageEnum } from '@/ui/types/localStorage.types';
import useLocalStorage from '@/ui/hook/useLocalStorage';
import EpisodeRowItem from './components/episode-row-item/EpisodeRowitem';
import { IEpisode } from '@/core/Itunes/domain/Podcasts';

export default function PodcastDetails() {
  const { episodesList } = useContext(PodcastContext) as IPodcastContext;

  useEffect(() => {
    updateStorage({ [localStorageEnum.EPISODES]: episodesList });
  }, [episodesList]);

  const { podcast, episodes } = useLocalStorage();

  return (
    <main>
      <Header />
      <div className={styles.PageContainer}>
        <section className={styles.podcastSection}>
          <div className={styles.imagePodcast}>
            <img src={podcast.image} alt={podcast.name} />
          </div>

          <div className={styles.titlePodcast}>
            <strong>
              <h4>{podcast.name}</h4>
            </strong>
            <h5>by {podcast.artist}</h5>
          </div>

          <div className={styles.summaryPodcast}>
            <strong>
              <h4>Description:</h4>
            </strong>
            <p>{podcast.summary}</p>
          </div>
        </section>
        <section className={styles.episodesListSection}>
          <div className={styles.titleList}>
            <h3>Episodes: {`${episodes.length}`}</h3>
          </div>
          <div className={styles.episodesList}>
            <div className={styles.titles}>
              <h5>Title</h5>
              <h5>Date</h5>
              <h5>Duration</h5>
            </div>
            <ul>
              {episodes.map((episode: IEpisode, index) => (
                <EpisodeRowItem episode={episode} key={index} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
