import type { FC } from 'hono/jsx';

export const LandingPage: FC = () => {
  return (
    <section className="min-h-dvh isolate flex flex-col justify-center items-center md:relative">
      <video
        className="absolute top-0 left-0 max-w-full h-dvh object-cover brightness-75 z-0"
        loop
        autoplay
        muted
      >
        <source src="/static/video/ducksloop.mp4" type="video/mp4" />
      </video>
      <img
        className="relative top-0 left-0 w-[80%] md:w-[50%] translate-y-[-50%] md:translate-y-0"
        src="/static/img/assets/ui/ui_logo.png"
        alt=""
      />
      <div className="hidden md:absolute bottom-8 left-[50%] md:flex flex-col justify-center items-center bg-white bg-opacity-80 text-black text-opacity-80 p-4 rounded-2xl shadow-xl bouncy">
        <p className="text-sm">See My Work!</p>
        <span class="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </section>
  );
};
