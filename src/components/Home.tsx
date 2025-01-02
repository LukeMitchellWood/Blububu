import { FC, PropsWithChildren } from 'hono/jsx';
import { Page } from './Page';

import { LandingPage } from './LandingPage';
import { NameTag } from './NameTag';
import { Socials } from './Socials';
import { BugsDivider } from './BugsDivider';
import { Showreel } from './Showreel';
import { Markets } from './Markets';

export const Home = () => {
  return (
    <Page pagetitle="Ali Mai's Portfolio">
      <LandingPage />
      <NameTag />
      <Socials />
      {/* <BugsDivider /> */}
      <Showreel />
      <Markets />
    </Page>
  );
};
