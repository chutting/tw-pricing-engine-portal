import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Radio from '..';

describe('radio', () => {
  afterEach(cleanup);

  it('should render defaultValue', async () => {
    render(
      <Radio.Group defaultValue='radio2'>
        <Radio value='radio1' label='radio1' />
        <Radio value='radio2' label='radio2' />
      </Radio.Group>);
    expect(screen.getByLabelText('radio2')).toBeChecked()
  });

  it('should call handleChange when change the input text', async () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Radio.Group onChange={handleChange}>
        <Radio value='radio1' label='radio1' />
        <Radio value='radio2' label='radio2' />
      </Radio.Group>);
    await fireEvent.click(getByText('radio2'))
    expect(handleChange).toBeCalledWith('radio2')
  });
})