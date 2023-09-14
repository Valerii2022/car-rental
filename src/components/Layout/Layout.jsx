import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { ReactComponent as LogoIcon } from '../../image/rental.svg';
import { ReactComponent as ActiveIcon } from '../../image/active.svg';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <LogoIcon width="32" height="32" />
          Car rental
        </NavLink>
        <NavLink to="/catalog">
          <p>Catalog</p>
        </NavLink>
        <NavLink to="/favourites">
          <ActiveIcon width="32" height="32" />
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
