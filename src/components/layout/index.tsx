import { ROUTE_PATH } from "@/routes";
import cls from 'classnames';
import { Link, useLocation } from "react-router-dom";
import styles from './index.module.less';
import logo from '@/assets/logo.svg';

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
        <div className={styles.navBar}>
          <Link to={ROUTE_PATH.HOME} className={cls(styles.link, { [styles.active]: location.pathname === ROUTE_PATH.HOME })}>Home</Link>
          <Link to={ROUTE_PATH.PROMOTION_LIST} className={cls(styles.link, { [styles.active]: location.pathname === ROUTE_PATH.PROMOTION_LIST })}>Promotion List</Link>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;