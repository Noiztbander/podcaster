import { podcastsGetter } from '@/core/Itunes/services';
import HomeProvider from '@/ui/pages/home/context/HomeProvider';
import Home from '@/ui/pages/home/Home';
import { IHomeContext } from '@/ui/pages/home/Home.types';
import Head from 'next/head';

export default function HomePage(props: IHomeContext) {
  return (
    <HomeProvider {...props}>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </HomeProvider>
  );
}

export async function getServerSideProps() {
  const [podcasts] = await Promise.all([podcastsGetter.get()]);

  return {
    props: {
      podcasts,
    },
  };
}
