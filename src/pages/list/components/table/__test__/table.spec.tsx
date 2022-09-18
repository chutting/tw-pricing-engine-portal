import { IPromotionDetail } from '@/typings/promotion';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PromotionTable from '..';

const data = [
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
] as IPromotionDetail[]

describe('promotion table', () => {
  afterEach(cleanup);

  it('should show table', () => {
    render(
      <BrowserRouter>
        <PromotionTable data={data} />
      </BrowserRouter>
    );
    expect(screen.queryByText('Id')).toBeInTheDocument();
    expect(screen.queryByText('Title')).toBeInTheDocument();
    expect(screen.queryByText('Start Date')).toBeInTheDocument();
    expect(screen.queryByText('End Date')).toBeInTheDocument();
    expect(screen.queryByText('Type')).toBeInTheDocument();
    expect(screen.queryByText('Description')).toBeInTheDocument();

    expect(screen.queryByText('440000200306196164')).toBeInTheDocument();
    expect(screen.queryByText('qc0')).toBeInTheDocument();
    expect(screen.queryByText('UfuQJ')).toBeInTheDocument();
    expect(screen.queryByText('1978-03-02 23:46:02')).toBeInTheDocument();
    expect(screen.queryByText('DEDUCTION')).toBeInTheDocument();
    expect(screen.queryByText('2000-12-31 11:29:26')).toBeInTheDocument();
  });

  it('should go to detail page when click title', () => {
    render(
      <BrowserRouter>
        <PromotionTable data={data} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('qc0'));
    expect(global.window.location.pathname).toEqual('/promotion-detail/440000200306196164');
  })
})