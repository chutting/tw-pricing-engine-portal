import Field from "@/components/field"
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
  const handleChange = (value) => {
    onChange({ priority: value })
  }

  return (
    <Field label="Priority">
      <InputNumerical onChange={handleChange} defaultValue={defaultValue} max={10} min={0} />
    </Field>
  )
}

export const StartDate = ({ onChange, defaultValue, endDate }) => {
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
      <InputDate onChange={handleChange} defaultValue={value} max={endDate} />
    </Field>
  )
}


export const EndDate = ({ onChange, defaultValue, startDate }) => {
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
      <InputDate onChange={handleChange} defaultValue={value} min={startDate} />
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
      <Radio.Group onChange={handleChange} defaultValue={value}>
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
      <Select defaultValue={value} onChange={handleChange}>
        <Select.Option label="discount" value={PromotionType.discount} />
        <Select.Option label="reduction" value={PromotionType.reduction} />
      </Select>
    </Field>
  )
}

export const DiscountRate = ({ defaultValue, onChange, onChangeValidateState }) => {
  const [value, setValue] = useState(defaultValue)
  const handleChangeValidateState = (validateState: boolean) => {
    onChangeValidateState({ discountRate: validateState })
  }
  const { errorCode } = useValidate({ value, onChangeValidateState: handleChangeValidateState, config: [ValidateConfig.REQUIRED] })
  const handleChange = (value) => {
    setValue(value)
    onChange({ discountRate: value })
  }
  return (
    <Field label="Discount Rate" errorCode={errorCode}>
      <InputNumerical onChange={handleChange} defaultValue={defaultValue} max={10} min={0} />
    </Field>
  )
}

export const MaxAmount = ({ defaultValue, onChange, min }) => {
  const handleChange = (value) => {
    onChange({ maxAmount: value })
  }
  return (
    <Field label="Max Amount">
      <InputNumerical onChange={handleChange} defaultValue={defaultValue} max={10000000} min={min} />
    </Field>
  )
}
export const ReduceAmount = ({ defaultValue, onChange, max }) => {
  const handleChange = (value) => {
    onChange({ reduceAmount: value })
  }
  return (
    <Field label="Reduce Amount">
      <InputNumerical onChange={handleChange} defaultValue={defaultValue} max={max} min={0} />
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
      <Radio.Group onChange={handleChange} defaultValue={value}>
        <Radio value={true} label="Yes" />
        <Radio value={false} label="No" />
      </Radio.Group>
    </Field>
  )
}