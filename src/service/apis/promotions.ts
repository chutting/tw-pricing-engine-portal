import { IPromotionDetail } from '@/typings/promotion';
import request from '..'

export const getPromotions = () => {
  return request.get<IPromotionDetail[]>('/promotions');
}

export const savePromotion = (promotion: IPromotionDetail) => {
  return request.post('/promotion', promotion);
}