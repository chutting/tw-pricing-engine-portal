import cls from 'classnames';
import { useEffect, useState } from 'react';
import styles from './index.module.less';

interface IProps {
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  defaultValue?: string;
  className?: string;
}

const Input = ({ onChange, placeholder = '', maxLength, defaultValue, className }: IProps) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    onChange(e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])

  return <input className={cls(styles.input, className)} onChange={handleChange} placeholder={placeholder} maxLength={maxLength} value={value} />
}

export default Input;
