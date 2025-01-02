import { Title } from './Title';
import { marketImages } from '../../config/markets';
import { marketListing } from '../../config/market-listing';
import { SectionContainer } from './SectionContainer';

const random = () => Math.random() * 2 - 1;

const MarketTitle = () => {
  return (
    <div className="flex flex-row lg:justify-center items-cente md:text-center gap-4">
      <img
        className="h-24 hidden lg:block"
        src="/static/img/assets/ui/ui_leaf.png"
        alt=""
      />
      <Title title="Markets" subtitle="and Collaborations" />
      <img
        className="h-24 hidden lg:block scale-x-[-100%]"
        src="static/img/assets/ui/ui_leaf.png"
        alt=""
      />
    </div>
  );
};

const MarketImages = () => {
  return (
    <div className="py-12">
      <ul class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4  md:gap-8 lg:gap-0">
        {marketImages.imgs.map((img) => {
          return (
            <li
              className={`rounded-xl shadow-xl border-8 border-white bg-white goodfood w-[75%] sm:w-[90%] md:w-full mx-auto`}
              style={`transform:rotate(${random() * 15}deg) translate(${
                random() * 10
              }%, ${random() * 5}%) scale(${1 + Math.random() * 0.1})`}
            >
              <img
                className="aspect-square object-cover"
                alt={img.description}
                src={img.src}
              />
              <p className="text-center py-4 text-purple-500">
                {img.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MarketList = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {marketListing.map((market) => {
          return (
            <li className="bg-white rounded-xl shadow-lg p-8 text-center w-[80%] sm:w-[50%] md:w-full mx-auto">
              <h3 className="text-2xl goodfood uppercase pb-4">
                {market.year}
              </h3>
              <ul>
                {market.list.map((item) => {
                  return (
                    <li className="">
                      <a
                        className="inline-block hover:bg-orange-500 hover:text-white hover:text-opacity-80 p-2 rounded-lg transition"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Markets = () => {
  return (
    <SectionContainer>
      <MarketTitle />
      <MarketImages />
      <MarketList />
    </SectionContainer>
  );
};
