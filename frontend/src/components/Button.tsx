import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  name: string
  value: string
  isSubmit: boolean
  onClick: () => void
}

function Button({ children, className, name, value, isSubmit, onClick }: ButtonProps) {
  return (
    <button
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      name={name}
      value={value}
    >
      {children}
    </button>
  )
}

export default Button
