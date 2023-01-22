import { useMemo } from 'react';
import type { IPodcastProviderProps } from '../PodcastDetails.types';
import PodcastContext from './PodcastContext';

const PodcastProvider = ({ episodesList, children }: IPodcastProviderProps) => {
  const watchProps = useMemo(() => ({ episodesList }), [episodesList]);

  return <PodcastContext.Provider value={watchProps}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
