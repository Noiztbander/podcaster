import { createContext } from 'react';
import { IPodcastContext } from '../PodcastDetails.types';

export default createContext<IPodcastContext | null>(null);
