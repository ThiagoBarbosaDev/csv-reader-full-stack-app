import React from 'react'
import PropTypes from 'prop-types'

function Button({
  children,
  className,
  isSubmit = true,
  onClick,
  name,
  value,
  isDisabled = false,
  action,
}) {
  return (
    <button
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      name={name}
      value={value}
      disabled={isDisabled}
      action={action}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  action: PropTypes.string,
}

Button.defaultProps = {
  isSubmit: true,
  children: null,
  isDisabled: null,
  className: null,
  action: null,
  onClick: null,
}

export default Button
