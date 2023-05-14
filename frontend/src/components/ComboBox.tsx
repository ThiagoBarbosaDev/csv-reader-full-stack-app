import React from 'react'

interface ComboBoxProps {
  value: string
  onChange: () => void
  data: string[]
  name: string
  className?: string | undefined
}

function ComboBox({ value, onChange, data, name, className = undefined }: ComboBoxProps) {
  return (
    <select className={className} name={name} value={value} onChange={onChange}>
      {data.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}

export default ComboBox
