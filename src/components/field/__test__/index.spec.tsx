import { render, cleanup, screen } from '@testing-library/react';
import Field from '..';

describe('form', () => {
  afterEach(cleanup);

  it('should show label with children', async () => {
    render(<Field label='whatever label'><div>whatever</div></Field>);
    expect(screen.queryByText('whatever label')).toBeInTheDocument();
  });
})