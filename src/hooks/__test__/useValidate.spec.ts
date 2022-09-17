import { FormErrorCode } from '@/constants/formErrorMessage';
import { renderHook } from '@testing-library/react-hooks';
import useValidate, { ValidateConfig } from '../useValidate';

describe('useValidate', () => {
  it('should return null errorCode when value is validated successfully', () => {
    const handleChangeValidateState = jest.fn()
    const { result } = renderHook(() => useValidate({ value: 'hello', config: [ValidateConfig.REQUIRED], onChangeValidateState: handleChangeValidateState }));
    expect(result.current).toEqual({ errorCode: null })
    expect(handleChangeValidateState).toBeCalledWith(true)
  });

  it('should return required errorCode when value is empty', () => {
    const handleChangeValidateState = jest.fn()
    const { result } = renderHook(() => useValidate({ value: '', config: [ValidateConfig.REQUIRED], onChangeValidateState: handleChangeValidateState }));
    expect(result.current).toEqual({ errorCode: FormErrorCode.REQUIRED })
    expect(handleChangeValidateState).toBeCalledWith(false)
  });
});
