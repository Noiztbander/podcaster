import { useMemo } from "react";
import type { HomeProviderProps } from "../Home.types";
import HomeContext from "./HomeContext";

const HomeProvider = ({ podcasts, children }: HomeProviderProps) => {
  const watchProps = useMemo(() => ({ podcasts }), [podcasts]);

  return (
    <HomeContext.Provider value={watchProps}>{children}</HomeContext.Provider>
  );
};

export default HomeProvider;
