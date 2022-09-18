import { IPromotionDetail } from '@/typings/promotion'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PromotionState {
  promotionDetail: IPromotionDetail
}

const initialState: PromotionState = {
  promotionDetail: {} as IPromotionDetail,
}

export default createSlice({
  name: 'promotions',
  initialState,
  reducers: {
    reset: (state) => {
      state.promotionDetail = initialState.promotionDetail
    },
    setPromotion: (state, action: PayloadAction<IPromotionDetail>) => {
      state.promotionDetail = action.payload
    }, 
  },
})
