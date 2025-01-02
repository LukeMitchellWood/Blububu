import { FC, PropsWithChildren } from 'hono/jsx';
import { Title } from './Title';

export const Showreel = () => {
  return (
    <div className="bg-orange-700">
      <div className="px-4 md:px-8 py-12 md:py-24 lg:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <video
              className="w-full rounded-xl overflow-hidden bg-black"
              controls
            >
              <source src="/static/video/showreel.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="text-white text-opacity-80">
            <Title title="Showreel" subtitle="2024" />
            <p className="leading-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias cumque laudantium voluptate? Quia ratione corporis
              inventore molestias dignissimos minus illum rerum repellendus
              deserunt recusandae. Veniam quasi error enim libero consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
