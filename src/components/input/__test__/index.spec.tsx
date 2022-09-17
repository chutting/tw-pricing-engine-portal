import { setup } from '@/tests/setup-env';
import { cleanup, screen } from '@testing-library/react';
import Input from '..';
import InputNumerical from '../inputNumerical';

describe('input', () => {
  afterEach(cleanup);

  it('should call handleChange when change the input text', async () => {
    const handleChange = jest.fn();
    const { user } = setup(<Input onChange={handleChange} />);
    await user.type(screen.getByRole('textbox'), 'hello')
    expect(handleChange).toBeCalledWith('hello')
  });

  it('should not input text when text length already equals maxLength', async () => {
    const handleChange = jest.fn();
    const { user } = setup(<Input onChange={handleChange} maxLength={5} />);
    await user.type(screen.getByRole('textbox'), 'hello222')
    expect(handleChange).toBeCalledWith('hello')
  });
})

describe('numerical input', () => {
  afterEach(cleanup);

  it('should call handleChange when change the input text', async () => {
    const handleChange = jest.fn();
    const { user } = setup(<InputNumerical onChange={handleChange} placeholder="placeholder" />);
    await user.type(screen.getByPlaceholderText('placeholder'), '1111')
    expect(handleChange).toBeCalledWith(111)
  });
})