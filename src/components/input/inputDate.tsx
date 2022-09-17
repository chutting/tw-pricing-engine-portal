import cls from "classnames";
import styles from './index.module.less';

interface IProps {
  onChange: (value: string) => void;
  max?: string
  min?: string
  className?: string;
  placeholder?: string
  value: string
}

const InputDate = ({ className, onChange, max, min, placeholder = '', value }: IProps) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return <input className={cls(styles.input, className)} type="date" onChange={handleChange} placeholder={placeholder} value={value} max={max} min={min} />
}

export default InputDate