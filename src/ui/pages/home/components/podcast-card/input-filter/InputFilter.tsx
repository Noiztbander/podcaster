import { Dispatch, SetStateAction } from 'react';
import styles from './InputFilter.module.scss';

const InputFilter = ({
  setQuery,
  podcastQuantity = 0,
}: {
  setQuery: Dispatch<SetStateAction<string>>;
  podcastQuantity: number;
}) => {
  return (
    <section className={styles.filterSection}>
      <div className={styles.podcastCounter}>
        <h3>{podcastQuantity}</h3>
      </div>

      <label htmlFor="filter-podcasts" className={styles.label}>
        <input
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          type="text"
          id="filter-podcasts"
          name="filter-podcasts"
          placeholder="Filter podcasts..."
        />
      </label>
    </section>
  );
};

export default InputFilter;
