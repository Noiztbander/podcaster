import { PodcastsGetter } from "../application/Podcasts";
import { PodcastsRepository } from "../infra/PodcastsRepository";

const podastRepository = new PodcastsRepository();

export const podcastsGetter = new PodcastsGetter(podastRepository);
