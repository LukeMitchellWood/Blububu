export const NavigationBar: FC = ({ navigationItems }) => {
  return (
    <div className="bg-white bg-opacity-20 text-black text-opacity-50 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 ">
        <ul className="flex items-center justify-center gap-2 py-8 text-sm goodfood">
          {navigationItems.map((navigationItem: string) => {
            return (
              <li className="hover:text-black hover:text-opacity-100 transition border-b border-black border-opacity-0 hover:border-opacity-100">
                <a
                  className="inline-block px-2 py-1"
                  href={`#${navigationItem
                    .split(' ')
                    .map((s) => s.toLowerCase())
                    .join('-')}`}
                >
                  {navigationItem}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
