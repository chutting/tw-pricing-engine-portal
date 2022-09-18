import { PromotionType } from '@/constants/promotion';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import PromotionDetail from '..';

jest.mock('@/store', () => ({
  useAppSelector: jest.fn().mockReturnValue({
    type: PromotionType.discount
  }),
  useAppDispatch: () => {
    return jest.fn()
  }
}));

describe('promotion detail', () => {
  afterEach(cleanup);

  it('should show basic fields', () => {
    render(<PromotionDetail />);
    expect(screen.queryByText('Title')).toBeInTheDocument();
    expect(screen.queryByText('Priority')).toBeInTheDocument();
    expect(screen.queryByText('StartDate')).toBeInTheDocument();
    expect(screen.queryByText('EndDate')).toBeInTheDocument();
    expect(screen.queryByText('Enabled')).toBeInTheDocument();
    expect(screen.queryByText('Description')).toBeInTheDocument();
    expect(screen.queryByText('Discount Type')).toBeInTheDocument();
    expect(screen.queryByText('Vip Only?')).toBeInTheDocument();
  });

  it('should change field when type is changed', async () => {
    render(<PromotionDetail />);
    expect(screen.queryByText('Discount Rate')).toBeInTheDocument();
    expect(screen.queryByText('Max Amount')).not.toBeInTheDocument();
    expect(screen.queryByText('Reduce Amount')).not.toBeInTheDocument();
    await fireEvent.change(screen.getByTestId('select'), { target: { value: PromotionType .reduction}})
    expect(screen.queryByText('Discount Rate')).not.toBeInTheDocument();
    expect(screen.queryByText('Max Amount')).toBeInTheDocument();
    expect(screen.queryByText('Reduce Amount')).toBeInTheDocument();
  });
})