import { PodcastDetailGetter } from '../application/PodcastDetailGetter';
import { PodcastsGetter } from '../application/PodcastsGetter';
import { PodcastDetailRepository } from '../infra/PodcastDetailRepository';
import { PodcastsRepository } from '../infra/PodcastsRepository';

const podcastRepository = new PodcastsRepository();
const podcastDetailRepository = new PodcastDetailRepository();

export const podcastsGetter = new PodcastsGetter(podcastRepository);
export const podcastDetailGetter = new PodcastDetailGetter(podcastDetailRepository);
