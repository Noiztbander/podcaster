import { ROUTES } from '@/constants';
import useLocalStorage from '@/ui/hook/useLocalStorage';
import Link from 'next/link';
import styles from './PodcastDetailItem.module.scss';

const PodcastDetailItem = () => {
  const { podcast } = useLocalStorage();
  return (
    <section className={styles.podcastSection}>
      <Link href={`${ROUTES.PODCAST}/${podcast.id}`} className={styles.imagePodcast}>
        <img src={podcast.image} alt={podcast.name} />
      </Link>

      <Link href={`${ROUTES.PODCAST}/${podcast.id}`} className={styles.titlePodcast}>
        <strong>
          <h4>{podcast.name}</h4>
        </strong>
        <h5>by {podcast.artist}</h5>
      </Link>

      <div className={styles.summaryPodcast}>
        <strong>
          <h4>Description:</h4>
        </strong>
        <p>{podcast.summary}</p>
      </div>
    </section>
  );
};
export default PodcastDetailItem;
