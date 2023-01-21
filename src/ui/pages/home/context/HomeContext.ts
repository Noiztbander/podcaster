import { createContext } from 'react';
import type { IHomeContext } from '../Home.types';

export default createContext<IHomeContext | null>(null);
