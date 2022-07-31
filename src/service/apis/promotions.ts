import http from '..'

export const getPromotions = () => {
  return http.get('/promotions');
}