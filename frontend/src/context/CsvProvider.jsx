import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import CsvContext from './CsvContext'

function CsvProvider({ children }) {
  const [file, setFile] = useState(null)
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)
  const [isInvalid, setIsInvalid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const context = useMemo(
    () => ({
      data,
      file,
      errors,
      isLoading,
      isInvalid,
      setData,
      setFile,
      setErrors,
      setIsLoading,
      setIsInvalid,
    }),
    [file, errors, data, isLoading, isInvalid]
  )

  return <CsvContext.Provider value={context}>{children}</CsvContext.Provider>
}

CsvProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CsvProvider
