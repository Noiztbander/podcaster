import { Ipodcast } from "@/core/Itunes/domain/Podcasts";
import { ReactNode } from "react";

export interface IHomeContext {
  podcasts: Ipodcast[];
}

export interface HomeProviderProps extends IHomeContext {
  children: ReactNode;
}
