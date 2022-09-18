import { IPromotionDetail } from '@/typings/promotion';
import promotionSlice, { PromotionState } from '../promotionSlice';

describe('promotion reducer', () => {
  const initialState: PromotionState = {
    promotionDetail: {} as IPromotionDetail
  };

  it('should handle set promotion detail', () => {
    const promotionState = promotionSlice.reducer(initialState, promotionSlice.actions.setPromotion({ title: 'mockTitle' } as IPromotionDetail));
    expect(promotionState.promotionDetail.title).toBe('mockTitle')
  });
});
