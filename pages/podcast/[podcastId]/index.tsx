import PodcastDetails from '@/ui/pages/podcast-details/PodcastDetails';
import { podcastDetailGetter } from '@/core/Itunes/services/index';
import PodcastProvider from '@/ui/pages/podcast-details/context/PodcastProvider';
import { IPodcastContext } from '@/ui/pages/podcast-details/PodcastDetails.types';
import Head from 'next/head';

export default function PodcastPage(props: IPodcastContext) {
  return (
    <PodcastProvider {...props}>
      <Head>
        <title>Podcast Detail</title>
      </Head>
      <PodcastDetails />
    </PodcastProvider>
  );
}

export async function getServerSideProps(context: { query: { podcastId: string } }) {
  const { podcastId } = context.query;
  const [episodesList] = await Promise.all([podcastDetailGetter.get(podcastId)]);

  return {
    props: {
      episodesList,
    },
  };
}
