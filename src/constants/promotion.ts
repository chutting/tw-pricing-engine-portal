export enum PromotionType {
  discount = 'DISCOUNT',
  reduction = 'REDUCTION'
}

export const promotionTypeMap = {
  [PromotionType.discount]: 'Discount Type',
  [PromotionType.reduction]: 'Reduction Type',
}