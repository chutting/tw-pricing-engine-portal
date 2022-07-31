import { render, cleanup, screen, waitFor, fireEvent } from '@testing-library/react';
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

jest.mock('react-router-dom', () => {
  const reactRouterDom = jest.requireActual('react-router-dom');
  return {
    ...reactRouterDom,
    useLocation: () => ({
      pathname: '/promotions',
    }),
  };
});

describe('layout', () => {
  afterEach(cleanup);

  it('should show table', () => {
    render(<BrowserRouter>
      <PromotionList />
    </BrowserRouter>);
    expect(screen.queryByText('Id')).toBeInTheDocument();
    expect(screen.queryByText('Title')).toBeInTheDocument();
    expect(screen.queryByText('StartDate')).toBeInTheDocument();
    expect(screen.queryByText('EndDate')).toBeInTheDocument();
    expect(screen.queryByText('Type')).toBeInTheDocument();
    expect(screen.queryByText('Description')).toBeInTheDocument();

    waitFor(() => {
      expect(screen.queryByText('440000200306196164')).toBeInTheDocument();
      expect(screen.queryByText('qc0')).toBeInTheDocument();
      expect(screen.queryByText('UfuQJ')).toBeInTheDocument();
      expect(screen.queryByText('1978-03-02 23:46:02')).toBeInTheDocument();
      expect(screen.queryByText('DEDUCTION')).toBeInTheDocument();
      expect(screen.queryByText('2000-12-31 11:29:26')).toBeInTheDocument();
    })
  });

  it('should go to detail page when click title', async() => {
    render(
      <BrowserRouter>
        <PromotionList />
      </BrowserRouter>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByText('qc0'));
      expect(global.window.location.pathname).toEqual('/promotion');
    })
  })
})