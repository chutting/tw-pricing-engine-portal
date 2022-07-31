import request from '..'

export const getPromotions = () => {
  return request.get('/promotions');
}