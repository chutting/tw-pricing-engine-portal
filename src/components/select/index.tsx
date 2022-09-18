import { PropsWithChildren, useEffect, useState } from "react"
import styles from './index.module.less'

interface IProps {
  onChange: (value: string) => void
  defaultValue: string
}

const Select = ({ defaultValue, onChange, children }: PropsWithChildren<IProps>) => {
  const [value, setValue] = useState<string>()
  const handleChange = (e) => {
    onChange(e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])
  
  return (
    <select onChange={handleChange} value={value} className={styles.select} data-testid="select">
      {children}
    </select>
  )
}

const Option = ({ value, label }: { value: string; label: string;} ) => {
  return <option value={value}>{label}</option>
}

Select.Option = Option;

export default Select