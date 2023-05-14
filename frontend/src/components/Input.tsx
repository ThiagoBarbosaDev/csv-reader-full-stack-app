import React from 'react'

interface InputProps {
  children?: string
  name: string
  type: string
  value: string
  checked: boolean
  onChange: () => void
}

function Input({ children = '', type, name, value, checked, onChange }: InputProps) {
  return (
    <label htmlFor={`form-${name}`}>
      {children}
      <input
        name={name}
        id={`form-${name}`}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}

export default Input
