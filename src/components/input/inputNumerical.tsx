import cls from "classnames";
import { useEffect, useState } from "react";
import styles from './index.module.less';

interface IProps {
  onChange: (value: number) => void;
  placeholder?: string;
  max?: number;
  min?: number;
  defaultValue?: string;
  className?: string;
}

const InputNumerical = ({ onChange, placeholder = '', max, min, defaultValue, className }: IProps) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    const _value = Number(e.target.value)
    if (_value > max) {
      return;
    }
    onChange(_value)
    setValue(_value.toString())
  }

  useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])

  return <input className={cls(styles.input ,className)} type="number" onChange={handleChange} placeholder={placeholder} value={value} max={max} min={min} />
}

export default InputNumerical