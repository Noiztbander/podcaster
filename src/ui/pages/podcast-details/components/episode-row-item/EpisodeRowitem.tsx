import { IEpisode } from '@/core/Itunes/domain/Podcasts';
import Link from 'next/link';
import styles from './EpisodeRowitem.module.scss';
import { formatDate, msToHMS } from './EpisodeRowitem.utils';

const EpisodeRowItem = ({ episode }: { episode: IEpisode }) => {
  return (
    <li>
      <Link href="" className={styles.liItem}>
        <p className={styles.title}>{episode.trackName}</p>
        <p>{formatDate(episode.releaseDate)}</p>
        <p>{msToHMS(episode.trackTimeMillis)}</p>
      </Link>
    </li>
  );
};

export default EpisodeRowItem;
