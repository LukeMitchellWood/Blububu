import type { FC } from 'hono/jsx';

export const NameTag: FC = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center bg-amber-100">
      <img
        className="w-64 relative drop-shadow-2xl"
        src="/static/img/nametag/leaf_1.png"
        alt=""
        srcset=""
      />

      <div className="flex flex-row items-center">
        <img
          className="sticker inline-block mr-[-5rem] relative z-10 drop-shadow-lg"
          src="/static/img/nametag/blu.png"
          alt=""
        />
        <div className=" inline-block w-[36rem] bg-white  border-white border-[12px] rounded-3xl rotate-6 overflow-hidden shadow-xl">
          <div className="bg-red-500 py-8 text-white text-center">
            <h1 className="text-4xl font-bold text-white">HELLO</h1>
            <p className="text-2xl">My Name is</p>
          </div>
          <div className="py-12 px-16">
            <p className="text-8xl tracking-wide goodfood text-center goodfood">
              Ali Mai
            </p>
            <p className="text-3xl goodfood text-center">
              I'm an illustrator and artist from outer space!
            </p>
          </div>
        </div>
      </div>
      <img
        className="w-64 relative z-20 drop-shadow-2xl"
        src="/static/img/nametag/leaf_2.png"
        alt=""
        srcset=""
      />
    </div>
  );
};
