interface IProps {
  maxLength?: number
  placeholder?: string
  rows?: number
  cols?: number
  onChange: (value: string) => void
  value: string
}

const TextArea = ({ placeholder = '', maxLength, rows = 5, cols = 50, onChange, value }: IProps) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return <textarea placeholder={placeholder} maxLength={maxLength} rows={rows} cols={cols} onChange={handleChange} value={value} />
}

export default TextArea;