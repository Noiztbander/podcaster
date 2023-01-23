import { ROUTES } from '@/constants';
import { IEpisode } from '@/core/Itunes/domain/Podcasts';
import { localStorageEnum } from '@/ui/types/localStorage.types';
import { updateStorage } from '@/ui/utils/storage.utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './EpisodeRowitem.module.scss';
import { formatDate, msToHMS } from './EpisodeRowitem.utils';

const EpisodeRowItem = ({ episode }: { episode: IEpisode }) => {
  const router = useRouter();
  const { podcastId } = router.query;

  return (
    <li>
      <Link
        href={`${ROUTES.PODCAST}/${podcastId}${ROUTES.EPISODE}/${episode.trackId}`}
        className={styles.liItem}
        onClick={() => {
          updateStorage({ [localStorageEnum.SELECTED_EPISODE]: episode });
        }}
      >
        <p className={styles.title}>{episode.trackName}</p>
        <p>{formatDate(episode.releaseDate)}</p>
        <p>{msToHMS(episode.trackTimeMillis)}</p>
      </Link>
    </li>
  );
};

export default EpisodeRowItem;
