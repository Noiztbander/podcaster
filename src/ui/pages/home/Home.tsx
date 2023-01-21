import { Ipodcast } from "@/core/Itunes/domain/Podcasts";
import { useContext } from "react";
import PodcastCard from "./components/podcast-card/PodcastCard";
import HomeContext from "./context/HomeContext";
import styles from "./home.module.scss";
import { IHomeContext } from "./Home.types";

export default function Home() {
  const { podcasts } = useContext(HomeContext) as IHomeContext;

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
      <section className={styles.podcastContainer}>
        {podcasts.map((podcast: Ipodcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </section>
    </main>
  );
}
