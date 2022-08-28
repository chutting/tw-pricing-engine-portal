import { PropsWithChildren } from 'react'
import cls from 'classnames'
import styles from './index.module.less'

interface IProps {
  className?: string;
  type?: 'primary';
  onClick?: () => void;
}

const Button = ({ children, className, type = 'primary', onClick }: PropsWithChildren<IProps>) => {
  return <button className={cls(styles.button, styles[`button-${type}`], className)} onClick={onClick}>
    {children}
  </button>
}

export default Button;