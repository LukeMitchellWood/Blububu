import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { logger } from 'hono/logger';

import { UI } from './components/UI';
import { navigation } from '../config/navigation';
import { Page } from './components/Page';
import { Home } from './components/Home';
import axios from 'axios';

const app = new Hono();

app.use('/*', logger());
app.use('/static/*', serveStatic({ root: './' }));
app.use('/favicon.png', serveStatic({ root: './' }));

app.get('/', (c) => {
  return c.html(<Home />);
});

navigation.forEach((nav) => {
  app.get(`${nav.url}`, (c) => c.html(UI[nav.componentKey]()));
});

app.post('/contact', async (c) => {
  const form = await c.req.formData();
  const name = form.get('name');
  const email = form.get('email');
  const msg = form.get('msg');
  const appscriptUrl =
    'https://script.google.com/macros/s/AKfycbzQ0aQnM9gqrgt7mIdlNcUeqK-RIULbx9yULqyd-BS0FdZ0VyuczNr_hqFCHqk0MTLr/exec';
  const requestUri = encodeURI(
    `${appscriptUrl}?name=${name}&email=${email}&msg=${msg}`
  );
  const res = await axios
    .get(requestUri)
    .catch((err) => console.error(err.message));
  console.log(res && res.data);
  return c.html(
    <Page pagetitle="Ali mai's Protfolio">
      <div className="py-12 md:py-48  min-h-dvh">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl mb-8 goodfood">Recieved your message!</h1>
          <p className="text-xl pb-4">Thanks for contacting me</p>
        </div>
      </div>
    </Page>
  );
});

serve({ fetch: app.fetch, port: 3737 });
