import { IPodcast } from "@/core/Itunes/domain/Podcasts";
import { ReactNode } from "react";

export interface IHomeContext {
  podcasts: IPodcast[];
}

export interface HomeProviderProps extends IHomeContext {
  children: ReactNode;
}
