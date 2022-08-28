export enum promotionType {
  all = 'ALL',
  discount = 'DISCOUNT',
  reduction = 'REDUCTION'
}

export const promotionTypeMap = {
  [promotionType.all]: 'All',
  [promotionType.discount]: 'Discount Type',
  [promotionType.reduction]: 'Reduction Type',
}