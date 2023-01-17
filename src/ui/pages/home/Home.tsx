import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.mainPage}>
      <section className={styles.podcasterSection}>
        <h3 className={styles.titlePodcaster}>Podcaster</h3>
      </section>
      <section className={styles.filterSection}>
        <div className={styles.podcastCounter}>
          <h3>100</h3>
        </div>

        <label htmlFor="filter-podcasts">
          <input
            type="text"
            id="filter-podcasts"
            name="filter-podcasts"
            placeholder="Filter podcasts..."
          />
        </label>
      </section>
      <section>Cards de los postcads</section>
    </main>
  );
}
