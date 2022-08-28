import request from '..'

export const getPromotions = () => {
  return request.get<IPromotion[]>('/promotions');
}