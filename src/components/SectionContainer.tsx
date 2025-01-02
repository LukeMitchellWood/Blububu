import { FC, PropsWithChildren } from 'hono/jsx';

export const SectionContainer = (props) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
      {props.children}
    </div>
  );
};
