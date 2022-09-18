import { routerConfig, ROUTE_PATH } from "@/routes";
import cls from 'classnames';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './index.module.less';
import logo from '@/assets/logo.svg';
import { useMemo } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navBarRouteConfig = routerConfig.filter(({ navBarName }) => !!navBarName)

  const showNavBar = useMemo(() => !!routerConfig.find(({ path }) => path === location.pathname)?.navBarName, [location])
  const goToHome = () => {
    navigate(ROUTE_PATH.HOME)
  }
  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} onClick={goToHome} />
        {showNavBar && (<div className={styles.navBar}>
            {navBarRouteConfig.map(({ navBarName, path }) =>
              (<Link key={path} to={path} className={cls(styles.link, { [styles.active]: location.pathname === path })}>{navBarName}</Link>)
            )}
          </div>
        )}
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout;