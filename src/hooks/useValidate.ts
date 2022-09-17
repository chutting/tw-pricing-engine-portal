import { FormErrorCode } from "@/constants/formErrorMessage"
import { useEffect, useState } from "react"

export enum ValidateConfig {
  REQUIRED = 'REQUIRED'
}

interface IProps {
  value: string,
  onChangeValidateState: (boolean) => void
  config: ValidateConfig[]
}

export default ({value, onChangeValidateState, config} : IProps) => {
  const [errorCode, setErrorCode] = useState<FormErrorCode>()
  const handleValidateFail = (code: FormErrorCode) => {
    setErrorCode(code)
    onChangeValidateState(false)
  }

  useEffect(() => {
    if (config.includes(ValidateConfig.REQUIRED) && !value) {
      handleValidateFail(FormErrorCode.REQUIRED)
    } else {
      setErrorCode(null)
      onChangeValidateState(true)
    }
  }, [value])

  return { errorCode }
}