import { routerConfig } from "@/routes";
import cls from 'classnames';
import { Link, useLocation } from "react-router-dom";
import styles from './index.module.less';
import logo from '@/assets/logo.svg';
import { useMemo } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  const navBarRouteConfig = routerConfig.filter(({ navBarName }) => !!navBarName)

  const showNavBar = useMemo(() => !!routerConfig.find(({ path }) => path === location.pathname)?.navBarName, [location])
  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
        {showNavBar && (<div className={styles.navBar}>
            {navBarRouteConfig.map(({ navBarName, path }) =>
              (<Link key={path} to={path} className={cls(styles.link, { [styles.active]: location.pathname === path })}>{navBarName}</Link>)
            )}
          </div>
        )}
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;