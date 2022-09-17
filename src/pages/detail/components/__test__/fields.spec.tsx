import { FormErrorCode, formMessageCodeMap } from '@/constants/formErrorMessage';
import { setup } from '@/tests/setup-env';
import { cleanup, screen } from '@testing-library/react';
import { Title } from '../fields';

describe('promotion detail fields', () => {
  afterEach(cleanup);

  it('should show required message when title value is empty', async () => {
    const { user } = setup(<Title onChange={jest.fn()} onChangeValidateState={jest.fn()} defaultValue="hello" />);
    expect(screen.queryByText(formMessageCodeMap[FormErrorCode.REQUIRED])).not.toBeInTheDocument()
    await user.clear(screen.getByRole('textbox'))
    expect(screen.queryByText(formMessageCodeMap[FormErrorCode.REQUIRED])).toBeInTheDocument()
  });
})