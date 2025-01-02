import { navigation } from '../../config/navigation';

export const Footer = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <footer>
          <div className="">
            <ul className="flex flex-col sm:flex-row text-sm gap-2 sm:gap-8 goodfood text-black text-opacity-60">
              {navigation.map((nav) => (
                <li className="border-l-4 sm:border-l-0 sm:border-b-4 border-transparent hover:border-black hover:border-opacity-60 pl-2 sm:pl-0 transition text-black text-opacity-60 hover:text-opacity-80">
                  <a href={nav.url}>{nav.linktext}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="py-8 sm:py-16 font-bold">
              <p className="">
                © Ali Mai and Blububu {new Date().getFullYear()}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 text-xs gap-4 text-opacity-50 text-black">
              <div className="">
                <p className="pb-2">
                  Current as of {`${new Date().toLocaleDateString('en-au')}`}.
                </p>
                <p>
                  Except as permitted by the copyright law applicable to you,
                  you may not reproduce or communicate any of the content on
                  this website, including files downloadable from this website,
                  without the permission of the copyright owner.
                </p>
              </div>
              <p>
                The Australian Copyright Act allows certain uses of content from
                the internet without the copyright owner's permission. This
                includes uses by educational institutions and by Commonwealth
                and State governments, provided fair compensation is paid. For
                more information, see{' '}
                <a
                  className="text-black text-opacity-60 hover:text-opacity-100 transition"
                  href="https://www.copyright.com.au"
                >
                  www.copyright.com.au
                </a>{' '}
                and{' '}
                <a
                  className="text-black text-opacity-60 hover:text-opacity-100 transition"
                  href="https://www.copyright.org.au"
                >
                  www.copyright.org.au
                </a>
                .
              </p>
              <div className="">
                <p className="pb-2">
                  The owners of copyright in the content on this website may
                  receive compensation for the use of their content by
                  educational institutions and governments, including from
                  licensing schemes managed by Copyright Agency.
                </p>
                <p>
                  We may change these terms of use from time to time. Check
                  before re-using any content from this website.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
