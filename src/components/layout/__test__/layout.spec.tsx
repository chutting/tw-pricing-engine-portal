import { ROUTE_PATH } from '@/routes';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '..';

jest.mock('react-router-dom', () => {
  const reactRouterDom = jest.requireActual('react-router-dom');
  return {
    ...reactRouterDom,
    useLocation: () => ({
      pathname: '/',
    }),
  };
});

describe('layout', () => {
  afterEach(cleanup);

  it('should show nav bar', () => {
    render(<BrowserRouter>
      <Layout>
        <></>
      </Layout>
    </BrowserRouter>);
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Promotion List')).toBeInTheDocument();
  });

  it('should change router when click nav bar button', async() => {
    const { getByText } = render(<BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTE_PATH.HOME} element={<div>home</div>} />
          <Route path={ROUTE_PATH.PROMOTION_LIST} element={<div>list</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>);
    fireEvent.click(getByText('Promotion List'));
    expect(global.window.location.pathname).toEqual('/promotions');
    expect(screen.queryByText('list')).toBeInTheDocument();
    expect(screen.queryByText('home')).not.toBeInTheDocument();
  });

  it('should nav bar button active when route is active', async () => {
    const { getByText } = render(<BrowserRouter>
      <Layout>
        <></>
      </Layout>
    </BrowserRouter>);
    expect(getByText('Home')).toHaveClass('active')
    expect(getByText('Promotion List')).not.toHaveClass('active')
  })
})