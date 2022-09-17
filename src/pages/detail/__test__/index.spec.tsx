import { render, cleanup, screen } from '@testing-library/react';
import PromotionDetail from '..';

describe('promotion detail', () => {
  afterEach(cleanup);

  it('should show basic fields', async () => {
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
})