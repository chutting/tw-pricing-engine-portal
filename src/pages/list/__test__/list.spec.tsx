import { promotionType, promotionTypeMap } from '@/constants/promotion';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PromotionList from '..';

jest.mock('@/service/apis/promotions', () => ({
  getPromotions: jest.fn().mockResolvedValue({
    data: [
      {
        description: "Kb!4",
        endDate: "1996-06-13 06:34:36",
        id: "440000200306196164",
        startDate: "1978-03-02 23:46:02",
        title: "qc0",
        type: "DISCOUNT",
      },
      {
        description: "UfuQJ",
        endDate: "2009-03-26 12:01:11",
        id: "510000198102170913",
        startDate: "2000-12-31 11:29:26",
        title: "1Sk",
        type: "DEDUCTION",
      }
    ]
  }),
}))

describe('promotion list', () => {
  afterEach(cleanup);

  it('should show promotions whose type is match filter',async () => {
    const { getByText } = render(<BrowserRouter><PromotionList /></BrowserRouter>);
    await waitFor(() => {
      expect(screen.queryByText('510000198102170913')).toBeInTheDocument()
    })
    fireEvent.click(getByText(promotionTypeMap[promotionType.discount]));
    expect(screen.queryByText('510000198102170913')).not.toBeInTheDocument();
    fireEvent.click(getByText(promotionTypeMap[promotionType.all]))
    waitFor(() => {
      expect(screen.queryByText('510000198102170913')).toBeInTheDocument()
    })
  });
})