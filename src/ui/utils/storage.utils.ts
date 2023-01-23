import { PORTAL_NAME } from '@/constants';
import { localStorageEnum } from '../types/localStorage.types';

export const initialStorage = {
  [localStorageEnum.TOPPODCASTS]: [],
  [localStorageEnum.SELECTED_PODCAST]: {},
  [localStorageEnum.EPISODES]: [],
  [localStorageEnum.SELECTED_EPISODE]: {},
};

export const getStorage = () => {
  const saved = localStorage.getItem(PORTAL_NAME);
  if (saved) {
    return JSON.parse(saved);
  }
  return initialStorage;
};

export const updateStorage = (updatedState: { [x: string]: any }) => {
  const saved = getStorage();
  localStorage.setItem(PORTAL_NAME, JSON.stringify({ ...saved, ...updatedState }));
};
