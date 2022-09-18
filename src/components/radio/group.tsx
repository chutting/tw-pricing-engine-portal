import { Children, cloneElement, PropsWithChildren, useEffect, useState } from "react"
import styles from './index.module.less'

interface IProps {
  onChange?: (value: string | boolean) => void
  defaultValue?: string | boolean
}

const RadioGroup = ({ children, onChange, defaultValue }: PropsWithChildren<IProps>) => {
  const [_value, setValue] = useState<string | boolean>(defaultValue)
  const handleChange = (value: boolean | boolean) => {
    setValue(value);
    onChange?.(value);
  };

  useEffect(() => {
    defaultValue !== undefined && setValue(defaultValue)
  }, [defaultValue])

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