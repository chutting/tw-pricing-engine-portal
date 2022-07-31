import PromotionDetail from '@/pages/detail';
import Home from '@/pages/home';
import PromotionList from '@/pages/list';

export enum ROUTE_PATH {
  HOME = '/',
  PROMOTION_LIST = '/promotions',
  PROMOTION_DETAIL = '/promotion',
}

interface IRoute {
  name?: string;
  path: string;
  component: React.FunctionComponent;
}

export const routerConfig: IRoute[] = [
  {
    name: 'home',
    path: ROUTE_PATH.HOME,
    component: Home,
  },
  {
    name: 'Promotion List',
    path: ROUTE_PATH.PROMOTION_LIST,
    component: PromotionList,
  },
  {
    path: ROUTE_PATH.PROMOTION_DETAIL,
    component: PromotionDetail,
  },
]
