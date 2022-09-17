import { PropsWithChildren } from "react"
import styles from './index.module.less'

interface IProps {
  onChange: (value: string) => void
  value: string
}

const Select = ({ value, onChange, children }: PropsWithChildren<IProps>) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <select onChange={handleChange} value={value} className={styles.select}>
      {children}
    </select>
  )
}

const Option = ({ value, label }: { value: string; label: string;} ) => {
  return <option value={value}>{label}</option>
}

Select.Option = Option;

export default Select