/* eslint-disable @next/next/no-img-element */
import { Ipodcast } from '@/core/Itunes/domain/Podcasts';
import styles from './PodcastCard.module.scss';

export default function PodcastCard({ podcast }: { podcast: Ipodcast }) {
  const { image, name, artist } = podcast;

  return (
    <div className={styles.podcastCard}>
      <div className={styles.bg}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.titles}>
          <h4>{name}</h4>
          <h5>{artist}</h5>
        </div>
      </div>
    </div>
  );
}
