import React, { useContext, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import CsvContext from '../../context/CsvContext'
import Button from '../Button'
import styles from './ControlPanel.module.scss'

const endpoint = 'http://localhost:3001/validate'

function ControlPanel() {
  const { file, isInvalid, setIsInvalid, setData, setErrors } = useContext(CsvContext)
  const [action, setAction] = useState('')

  const onValidateSubmit = async formData => {
    try {
      setErrors(null)
      setIsInvalid(true)
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setData(response.data.productData)
      setIsInvalid(false)
    } catch (err) {
      console.log(err)
      const errors = err?.response?.data?.errors
      if (errors) {
        setErrors(errors)
        setData(err?.response?.data?.productData)
      }
    }
  }

  function onUpdateSubmit() {
    console.log('click update')
  }

  const onSubmit = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    if (action === 'validate') {
      console.log('validate')
      onValidateSubmit(formData) // call the save submit handler
    }
    if (action === 'update') {
      onUpdateSubmit(formData) // call the save submit handler
    }
  }
  console.log(isInvalid)
  return (
    <div className={styles.container}>
      {file && <span className={styles.file}>{file.path}</span>}
      <form onSubmit={onSubmit} className={styles.forms}>
        <Button
          name="action"
          value="validate"
          isDisabled={!file}
          className={styles.button}
          onClick={() => setAction('validate')}
        >
          Validar
        </Button>
        <Button
          name="action"
          value="update"
          isDisabled={isInvalid}
          onClick={() => setAction('update')}
          className={classNames([styles.button, styles['button-update']])}
        >
          Atualizar
        </Button>
      </form>
    </div>
  )
}

export default ControlPanel
