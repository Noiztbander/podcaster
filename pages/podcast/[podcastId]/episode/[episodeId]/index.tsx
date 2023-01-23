import EpisodeDetails from '@/ui/pages/episode-details/EpisodeDetails';
import Head from 'next/head';

export default function EpisodePage() {
  return (
    <>
      <Head>
        <title>Episode Detail</title>
      </Head>
      <EpisodeDetails />
    </>
  );
}
