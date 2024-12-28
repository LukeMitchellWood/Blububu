import type { FC } from 'hono/jsx';

export const SectionContent: FC = ({ navigationItems }) => {
  return (
    <div className="bg-orange-500 text-white text-opacity-80">
      <div className="max-w-3xl mx-auto px-4">
        {navigationItems.map((navigationItem: string) => {
          return (
            <section
              className="min-h-dvh py-32"
              id={navigationItem
                .split(' ')
                .map((s) => s.toLowerCase())
                .join('-')}
            >
              <h2 className="text-4xl goodfood">{navigationItem}</h2>
            </section>
          );
        })}
      </div>
    </div>
  );
};
