(function Navigation() {
  const navmenu = document.querySelector('#nav-menu');
  const menubutton = document.querySelector('#nav-button');
  const menuactive = document.querySelector('#menu-active');
  const menuinactive = document.querySelector('#menu-inactive');

  menubutton.addEventListener('click', (ev) => {
    menuinactive.classList.toggle('opacity-100');
    menuinactive.classList.toggle('opacity-0');
    menuactive.classList.toggle('opacity-0');
    menuactive.classList.toggle('opacity-100');
    navmenu.classList.toggle('-translate-x-full');
    navmenu.classList.toggle('translate-x-0');
  });

  const navfull = document.querySelector('#nav-full');

  document.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 96 * 2) {
      navfull.classList.toggle('bg-opacity-40', false);
      navfull.classList.toggle('bg-opacity-100', true);
      navfull.classList.toggle('py-8', false);
      navfull.classList.toggle('py-4', true);
      navfull.classList.toggle('mb-[-96px]', false);
      navfull.classList.toggle('mb-[-64px]', true);
      navfull.classList.toggle('shadow-none', false);
      navfull.classList.toggle('shadow-xl', true);
      return;
    }
    navfull.classList.toggle('mb-[-64px]', false);
    navfull.classList.toggle('mb-[-96px]', true);
    navfull.classList.toggle('py-4', false);
    navfull.classList.toggle('py-8', true);
    navfull.classList.toggle('bg-opacity-100', false);
    navfull.classList.toggle('bg-opacity-40', true);
    navfull.classList.toggle('shadow-xl', false);
    navfull.classList.toggle('shadow-none', true);
  });
})();
