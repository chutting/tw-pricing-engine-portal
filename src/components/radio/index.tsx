import RadioGroup from "./group"

interface IProps {
  checked?: boolean;
  value: string | boolean;
  label: string;
  onChange?: (value: string | boolean) => void
}

const Radio = ({ checked, label, onChange }: IProps) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  }
  return (
    <div>
      <input onChange={handleChange} type="radio" checked={checked} />
      <label>{label}</label>
    </div>
  )
}

Radio.Group = RadioGroup;

export default Radio;