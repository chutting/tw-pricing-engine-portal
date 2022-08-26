import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '..';

// jest.mock('react-router-dom', () => {
//   const reactRouterDom = jest.requireActual('react-router-dom');
//   return {
//     ...reactRouterDom,
//     useLocation: () => ({
//       pathname: '/',
//     }),
//   };
// });

describe('home', () => {
  afterEach(cleanup);

  it('should go to promotion detail page when click create button in cover',async () => {
    const { getByText } = render(<BrowserRouter>
      <Home />
    </BrowserRouter>);
    expect(screen.queryByText('Create Promotion')).toBeInTheDocument();
    await waitFor(() => {
      fireEvent.click(getByText('Create Promotion'))
    });
    expect(global.window.location.pathname).toEqual('/promotion-create');
  });
})