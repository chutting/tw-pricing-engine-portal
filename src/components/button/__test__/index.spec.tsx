import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '..';

describe('button', () => {
  afterEach(cleanup);

  it('should call handleClick when click button', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>test button</Button>);
    fireEvent.click(getByText('test button'));
    expect(handleClick).toBeCalled();
  });
})