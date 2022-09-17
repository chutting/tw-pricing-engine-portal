import { IPromotion } from '@/typings/promotion';
import request from '..'

export const getPromotions = () => {
  return request.get<IPromotion[]>('/promotions');
}