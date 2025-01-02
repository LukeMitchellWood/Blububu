import { FC } from 'hono/jsx';

import { navigation } from '../../config/navigation';

export const NavigationBar: FC = () => {
  return (
    <>
      <script src="/static/js/navigation.js" defer></script>
      <div className=" text-black text-opacity-50 sticky top-0 z-10">
        <label
          className="z-20 inline-block relative md:hidden m-4 w-16 h-16 rounded-full bg-white cursor-pointer shadow hover:shadow-lg active:shadow-sm hover:bg-slate-100 active:bg-orange-400 border-4 border-slate-10 hover:border-slate-400 active:border-black active:border-opacity-40 transition"
          htmlFor="menu-state"
          role="button"
          id="nav-button"
        >
          <img
            className="w-10 h-10 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transition opacity-100 pointer-events-none duration-300"
            id="menu-inactive"
            src="/static/img/assets/ui/ui_menu-closed.png"
            alt=""
            srcset=""
          />
          <img
            className="w-10 h-10 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transition opacity-0 pointer-events-none duration-300"
            id="menu-active"
            src="/static/img/assets/ui/ui_menu-open.png"
            alt=""
            srcset=""
          />
        </label>
        <input
          className="hidden mb-[-64] "
          type="checkbox"
          name=""
          id="menu-state"
        />
        <div
          id="nav-menu"
          className="z-10 absolute px-4 top-0 left-0 bg-white -translate-x-full w-[75%] h-dvh pt-24 transition-transform shadow-2xl"
        >
          <ul className="flex flex-col text-lg goodfood">
            {navigation.map((nav) => {
              return (
                <li className="hover:text-black hover:text-opacity-100 transition border-l-4 pl-2 border-black border-opacity-0 hover:border-opacity-100 mb-4">
                  <a className="inline-block" href={nav.url}>
                    {nav.linktext}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          id="nav-full"
          className="hidden md:block bg-white bg-opacity-40 relative py-8 mb-[-96px] transition-all duration-150 shadow-none"
        >
          <div className="max-w-4xl mx-auto px-4">
            <ul className="flex flex-row text-lg gap-8 goodfood items-center justify-center">
              {navigation.map((nav) => {
                return (
                  <li className="hover:text-black hover:text-opacity-100 transition border-b-4 border-black border-opacity-0 hover:border-opacity-100">
                    <a className="inline-block" href={nav.url}>
                      {nav.linktext}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
