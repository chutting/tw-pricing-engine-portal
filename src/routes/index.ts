import PromotionDetail from '@/pages/detail';
import Home from '@/pages/home';
import PromotionList from '@/pages/list';

export enum ROUTE_PATH {
  HOME = '/',
  PROMOTION_LIST = '/promotions',
  PROMOTION_CREATE = '/promotion-create',
  PROMOTION_DETAIL = '/promotion-detail',
}

interface IRoute {
  navBarName?: string;
  path: string;
  component: React.FunctionComponent;
}

export const routerConfig: IRoute[] = [
  {
    navBarName: 'Home',
    path: ROUTE_PATH.HOME,
    component: Home,
  },
  {
    navBarName: 'Promotion List',
    path: ROUTE_PATH.PROMOTION_LIST,
    component: PromotionList,
  },
  {
    path: ROUTE_PATH.PROMOTION_CREATE,
    component: PromotionDetail,
  },
  {
    path: ROUTE_PATH.PROMOTION_DETAIL,
    component: PromotionDetail,
  },
]
