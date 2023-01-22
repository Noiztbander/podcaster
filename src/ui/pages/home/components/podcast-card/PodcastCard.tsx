/* eslint-disable @next/next/no-img-element */
import { ROUTES } from '@/constants';
import { Ipodcast } from '@/core/Itunes/domain/Podcasts';
import { localStorageEnum } from '@/ui/types/localStorage.types';
import { updateStorage } from '@/ui/utils/storage.utils';
import Link from 'next/link';
import styles from './PodcastCard.module.scss';

export default function PodcastCard({ podcast }: { podcast: Ipodcast }) {
  const { image, name, artist, id } = podcast;

  return (
    <div className={styles.podcastCard}>
      <Link
        href={`${ROUTES.PODCAST}/${id}`}
        className={styles.bg}
        onClick={() => {
          updateStorage({ [localStorageEnum.SELECTED_PODCAST]: podcast });
        }}
      >
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.titles}>
          <h4>{name.toUpperCase()}</h4>
          <h5>{artist}</h5>
        </div>
      </Link>
    </div>
  );
}
