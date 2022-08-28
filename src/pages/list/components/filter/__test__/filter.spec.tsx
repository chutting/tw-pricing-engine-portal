import { promotionType, promotionTypeMap } from '@/constants/promotion';
import { render, cleanup, fireEvent } from '@testing-library/react';
import PromotionFilter from '..';

describe('promotion filter', ()=> {
  afterEach(cleanup);

  it('should pass type params to handleChange when change filter type', ()=> {
    const handleChange = jest.fn()
    const { getByText } = render(<PromotionFilter onChange={handleChange} />)

    fireEvent.click(getByText(promotionTypeMap[promotionType.discount]));
    expect(handleChange).toBeCalledWith(promotionType.discount)
  });
})