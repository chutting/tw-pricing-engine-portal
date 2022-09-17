import { FormErrorCode, formMessageCodeMap } from "@/constants/formErrorMessage";
import { cloneElement, ReactElement } from "react";
import styles from './index.module.less';

export interface IFieldProps {
  label: string
  errorCode?: FormErrorCode
  children: ReactElement
}

const Field = ({ label, errorCode, children }: IFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label className={styles.label}>{label}</label>
        {cloneElement(children, { className: styles.formItem })}
      </div>
      {!!errorCode && <span className={styles.error}>{formMessageCodeMap[errorCode]}</span>}
    </div>
  )
}

export default Field;
