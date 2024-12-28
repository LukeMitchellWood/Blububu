import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { logger } from 'hono/logger';

import { Layout } from './components/Layout';

import { navigation } from '../config/navigation';
import { NavigationBar } from './components/NavigationBar';
import { SectionContent } from './components/SectionContent';
import { LandingPage } from './components/LandingPage';
import { NameTag } from './components/NameTag';

const app = new Hono();

app.use('/*', logger());
app.use('/static/*', serveStatic({ root: './' }));

app.get('/', (c) => {
  return c.html(
    <Layout title="Ali Mai | Protfolio">
      <NavigationBar navigationItems={navigation} />
      <LandingPage />
      <NameTag />
      <SectionContent navigationItems={navigation} />
    </Layout>
  );
});

serve({ fetch: app.fetch, port: 3737 });
