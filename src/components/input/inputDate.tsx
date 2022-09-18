import cls from "classnames";
import { useEffect, useState } from "react";
import styles from './index.module.less';

interface IProps {
  onChange: (value: string) => void;
  max?: string
  min?: string
  className?: string;
  placeholder?: string
  defaultValue: string
}

const InputDate = ({ className, onChange, max, min, placeholder = '', defaultValue }: IProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])
  
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return <input className={cls(styles.input, className)} type="date" onChange={handleChange} placeholder={placeholder} value={value} max={max} min={min} />
}

export default InputDate