import styles from './EpisodeDetails.module.scss';
import Header from '@/ui/components/header/Header';

import PodcastDetailItem from '@/ui/components/podcast-detail-item/PodcastDetailItem';
import useLocalStorage from '@/ui/hook/useLocalStorage';

export default function EpisodeDetails() {
  const { episode } = useLocalStorage();

  return (
    <main>
      <Header />
      <div className={styles.PageContainer}>
        <PodcastDetailItem />
        <section className={styles.episodeSection}>
          <div className={styles.title}>{episode.trackName}</div>

          <div>
            <textarea readOnly className={styles.textArea} defaultValue={episode.description} />
          </div>
          <div className={styles.audio}>
            <audio controls autoPlay preload="auto">
              <source src={episode.episodeUrl} type="audio/mpeg" />
            </audio>
          </div>
        </section>
      </div>
    </main>
  );
}
