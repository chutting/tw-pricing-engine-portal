import { ROUTE_PATH } from "@/routes";
import cls from 'classnames';
import { Link, useLocation } from "react-router-dom";
import styles from './index.module.less';

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <header>
        <Link to={ROUTE_PATH.HOME} className={cls({ [styles.active]: location.pathname === ROUTE_PATH.HOME })}>Home</Link>
        <Link to={ROUTE_PATH.PROMOTION_LIST} className={cls({ [styles.active]: location.pathname === ROUTE_PATH.PROMOTION_LIST })}>Promotion List</Link>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;