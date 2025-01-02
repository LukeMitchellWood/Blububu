import type { FC, PropsWithChildren } from 'hono/jsx';

import { Layout } from './Layout';
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';

export const Page: FC = (props: { pagetitle: string } & PropsWithChildren) => {
  return (
    <Layout pagetitle={props.pagetitle}>
      <NavigationBar />
      {props.children}
      <Footer />
    </Layout>
  );
};
