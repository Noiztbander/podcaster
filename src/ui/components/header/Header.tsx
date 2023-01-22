import { ROUTES } from '@/constants';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.podcasterSection}>
      <Link href={ROUTES.HOME}>
        <h3 className={styles.titlePodcaster}>Podcaster</h3>
      </Link>
    </section>
  );
};

export default Header;
