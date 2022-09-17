import Field from "@/components/form"
import Input from "@/components/input"
import InputDate from "@/components/input/inputDate"
import InputNumerical from "@/components/input/inputNumerical"
import Radio from "@/components/radio"
import Select from "@/components/select"
import TextArea from "@/components/textarea"
import { useEffect, useState } from "react"
import useValidate, { ValidateConfig } from "../../../hooks/useValidate"
import { PromotionType } from "@/constants/promotion";

export const Title = ({ onChange, defaultValue, onChangeValidateState }: {
  onChange: (keyValue: Record<string, string>) => void
  defaultValue: string
  onChangeValidateState?: (validateState: Record<string, boolean>) => void
}) => {
  const [value, setValue] = useState<string>(defaultValue)
  const handleChangeValidateState = (validateState: boolean) => {
    onChangeValidateState({ title: validateState })
  }
  const { errorCode } = useValidate({ value, onChangeValidateState: handleChangeValidateState, config: [ValidateConfig.REQUIRED]})

  const handleChange = (value) => {
    setValue(value)
    onChange({ title: value })
  }

  return (
    <Field label="Title" errorCode={errorCode}>
      <Input onChange={handleChange} defaultValue={defaultValue} />
    </Field>
  )
}

export const Priority = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ priority: value })
  }

  return (
    <Field label="Priority">
      <InputNumerical onChange={handleChange} defaultValue={value} max={10} min={0} />
    </Field>
  )
}

export const StartDate = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ startDate: value })
  }

  return (
    <Field label="StartDate">
      <InputDate onChange={handleChange} value={value} />
    </Field>
  )
}


export const EndDate = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ endDate: value })
  }

  return (
    <Field label="EndDate">
      <InputDate onChange={handleChange} value={value} />
    </Field>
  )
}

export const Enabled = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ enabled: value })
  }

  return (
    <Field label="Enabled">
      <Radio.Group onChange={handleChange} value={value}>
        <Radio value={true} label="Yes" />
        <Radio value={false} label="No" />
      </Radio.Group>
    </Field>
  )
}
export const Description = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ description: value })
  }

  return (
    <Field label="Description">
      <TextArea onChange={handleChange} value={value} />
    </Field>
  )
}

export const DiscountType = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ type: value })
  }

  return (
    <Field label="Discount Type">
      <Select value={value} onChange={handleChange}>
        <Select.Option label="discount" value={PromotionType.discount} />
        <Select.Option label="reduction" value={PromotionType.reduction} />
      </Select>
    </Field>
  )
}

export const VipOnly = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  const handleChange = (value) => {
    setValue(value)
    onChange({ vipOnly: value })
  }

  return (
    <Field label="Vip Only?">
      <Radio.Group onChange={handleChange} value={value}>
        <Radio value={true} label="Yes" />
        <Radio value={false} label="No" />
      </Radio.Group>
    </Field>
  )
}