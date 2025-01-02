import type { FC } from 'hono/jsx';

export const NameTag: FC = () => {
  return (
    <div className="py-12 lg:py-24 min-h-fit isolate">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <img
          className="lg:w-32 relative drop-shadow-2xl hidden lg:block"
          src="/static/img/nametag/nt_leaf.png"
          alt=""
          srcset=""
        />

        <div className="flex flex-col md:flex-row items-center relative">
          <img
            className="w-36 md:w-64 inline-block md:mr-[-5rem] md:relative z-10 drop-shadow-lg left-0 top-0 absolute"
            src="/static/img/nametag/nt_blububu.png"
            alt=""
          />
          <div className="scale-90 inline-block box-border max-w-[24rem] md:max-w-full md:w-[36rem] bg-white  border-white border-[12px] rounded-3xl rotate-6 overflow-hidden shadow-xl">
            <div className="bg-red-500 py-4 md:py-8 text-white text-center">
              <h1 className=" md:text-4xl font-bold text-white">HELLO</h1>
              <p className=" md:text-2xl">My Name is</p>
            </div>
            <div className="py-8 md:py-12 px-8 md:px-16">
              <p className="text-2xl md:text-8xl tracking-wide goodfood text-center goodfood">
                Ali Mai
              </p>
              <p className="md:text-3xl goodfood text-center">
                I'm an illustrator and artist from outer space!
              </p>
            </div>
          </div>
        </div>
        <img
          className="lg:w-32 relative z-20 drop-shadow-2xl hidden lg:block scale-x-[-100%]"
          src="/static/img/nametag/nt_leaf.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};
