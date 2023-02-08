import { render } from '@testing-library/react';
import EpisodeDetails from '../episode-details/EpisodeDetails';
import HomeProvider from '../home/context/HomeProvider';
import Home from '../home/Home';
import PodcastProvider from '../podcast-details/context/PodcastProvider';
import PodcastDetails from '../podcast-details/PodcastDetails';
import podcastMock from './podcasts.json';
import episodesMock from './episodes.json';
import { IEpisode } from '@/core/Itunes/domain/Podcasts';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('<Home />', () => {
  it('should render the component correctly with default values', () => {
    const { asFragment } = render(
      <HomeProvider podcasts={[]}>
        <Home />
      </HomeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the component correctly with some value', () => {
    const { asFragment } = render(
      <HomeProvider podcasts={podcastMock}>
        <Home />
      </HomeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<PodcastDetails />', () => {
  it('should render the component correctly with default values', () => {
    const { asFragment } = render(
      <PodcastProvider episodesList={[]}>
        <PodcastDetails />
      </PodcastProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the component correctly with some value', () => {
    const { asFragment } = render(
      <PodcastProvider episodesList={episodesMock as IEpisode[]}>
        <PodcastDetails />
      </PodcastProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<<EpisodeDetails /> />', () => {
  it('should render the component correctly with default values', () => {
    const { asFragment } = render(<EpisodeDetails />);

    expect(asFragment()).toMatchSnapshot();
  });
});
