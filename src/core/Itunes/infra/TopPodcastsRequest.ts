import { ITUNES_BASE_URL } from "src/constants";

export const TopPodcastsRequest = async (
  endpoint: string,
  method = "GET"
): Promise<any> => {
  const response = await fetch(`${ITUNES_BASE_URL}${endpoint}`, {
    method,
  });

  if (!response.ok) {
    throw response.status;
  }

  const data = await response.json();

  return data;
};
