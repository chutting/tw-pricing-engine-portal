import { Children, cloneElement, PropsWithChildren, useState } from "react"
import styles from './index.module.less'

interface IProps {
  onChange: (value: string | boolean) => void
  value: string | boolean
}

const RadioGroup = ({ children, onChange, value }: PropsWithChildren<IProps>) => {
  const [_value, setValue] = useState<string | boolean>(value)
  const handleChange = (value: boolean | boolean) => {
    setValue(value);
    onChange?.(value);
  };
  return (
    <div className={styles.radioGroup}>
      {Children.map(children, (child: React.ReactElement, index) => {
        return cloneElement(child, {
          key: index,
          onChange: () => handleChange(child.props.value),
          checked: _value === child.props.value
        })
      })}
    </div>
  )
}

export default RadioGroup;