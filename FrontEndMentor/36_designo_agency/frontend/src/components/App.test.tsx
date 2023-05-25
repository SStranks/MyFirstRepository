import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

const ROUTES = {
  erroneous: '/erroneous',
  home: '/',
  webdesign: '/webdesign',
  appdesign: '/appdesign',
  graphicdesign: '/graphicdesign',
  locations: '/locations',
  about: '/about',
  contact: '/contact',
};

jest.mock('#Pages/home/Home', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-home" />;
    },
  };
});

jest.mock('#Pages/web-design/WebDesign', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-webdesign" />;
    },
  };
});

jest.mock('#Pages/app-design/AppDesign', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-appdesign" />;
    },
  };
});

jest.mock('#Pages/graphic-design/GraphicDesign', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-graphicdesign" />;
    },
  };
});

jest.mock('#Pages/locations/Locations', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-locations" />;
    },
  };
});

jest.mock('#Pages/about/About', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-about" />;
    },
  };
});

jest.mock('#Pages/contact/Contact', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="page-contact" />;
    },
  };
});

describe('Static Routes', () => {
  test('non-designated routes should redirect and render home page', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    // NOTE:  Push after render to ensure redirect is enacted
    history.push(ROUTES.erroneous);

    const HomePage = await waitFor(() => screen.getByTestId('page-home'));

    expect(HomePage).toBeInTheDocument();
  });

  test('`/` should render home page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.home);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const HomePage = screen.getByTestId('page-home');

    expect(HomePage).toBeInTheDocument();
  });

  test('`/webdesign` should render webdesign page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.webdesign);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const WebDesignPage = await waitFor(() =>
      screen.getByTestId('page-webdesign')
    );

    expect(WebDesignPage).toBeInTheDocument();
  });

  test('`/appdesign` should render appdesign page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.appdesign);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const AppDesignPage = await waitFor(() =>
      screen.getByTestId('page-appdesign')
    );

    expect(AppDesignPage).toBeInTheDocument();
  });

  test('`/graphicdesign` should render graphicdesign page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.graphicdesign);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const GraphicDesignPage = await waitFor(() =>
      screen.getByTestId('page-graphicdesign')
    );

    expect(GraphicDesignPage).toBeInTheDocument();
  });

  test('`/locations` should render locations page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.locations);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const LocationsPage = await waitFor(() =>
      screen.getByTestId('page-locations')
    );

    expect(LocationsPage).toBeInTheDocument();
  });
  test('`/about` should render about page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.about);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const AboutPage = await waitFor(() => screen.getByTestId('page-about'));

    expect(AboutPage).toBeInTheDocument();
  });

  test('`/contact` should render contact page', async () => {
    const history = createMemoryHistory();
    history.push(ROUTES.contact);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const ContactPage = await waitFor(() => screen.getByTestId('page-contact'));

    expect(ContactPage).toBeInTheDocument();
  });
});
