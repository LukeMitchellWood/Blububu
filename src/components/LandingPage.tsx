import type { FC } from 'hono/jsx';

export const LandingPage: FC = () => {
  return (
    <section className="relative top-0 left-0 min-h-dvh z-0 mt-[-93px]">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover brightness-75"
        autoplay
        mute
        loop
        playsinline
        src="/static/img/assets/ducks-and-frog-loop-animation.mp4"
      ></video>
      <img
        className="min-h-full absolute top-0 left-0 object-contain"
        src="/static/img/assets/text_orig.png"
        alt=""
      />
      <div className="text-white text-opacity-80 text-2xl absolute left-1/2 bottom-8 translate-x-[-50%] flex flex-col justify-center items-center bouncy">
        <p>See More</p>
        <span class="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </section>
  );
};
