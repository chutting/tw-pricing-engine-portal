import { useCallback } from "react";

interface IProps {
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number
}

const Input = ({ onChange, placeholder = 'placeholder', maxLength }: IProps) => {
  const handleValidateMaxLength = useCallback((_value: string) => !maxLength || _value.length <= maxLength, [maxLength])

  const handleChange = (e) => {
    const _value = e.target.value;
    if (!handleValidateMaxLength(_value)) {
      return;
    }
    onChange(e.target.value)
  }

  return <input onChange={handleChange} placeholder={placeholder} />
}

export default Input;
