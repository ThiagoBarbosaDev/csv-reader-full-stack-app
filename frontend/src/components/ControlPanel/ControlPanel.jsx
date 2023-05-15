import React, { useContext, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import CsvContext from '../../context/CsvContext'
import Button from '../Button'
import styles from './ControlPanel.module.scss'

const VALIDATE_ENDPOINT = 'http://localhost:3001/validate'
const UPDATE_ENDPOINT = 'http://localhost:3001/update'

function ControlPanel() {
  const { file, setFile, isInvalid, setIsInvalid, setData, setErrors } = useContext(CsvContext)
  const [action, setAction] = useState('')
  const onValidateSubmit = async formData => {
    try {
      setErrors(null)
      setIsInvalid(true)
      const response = await axios.post(VALIDATE_ENDPOINT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setData(response.data.productData)
      setIsInvalid(false)
    } catch (err) {
      const errors = err?.response?.data?.errors
      if (errors) {
        setErrors(errors)
        setData(err?.response?.data?.productData)
      }
    }
  }

  const onUpdateSubmit = async formData => {
    try {
      const response = await axios.put(UPDATE_ENDPOINT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 204) {
        toast.success('Banco de dados atualizado com sucesso!', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
    } catch (err) {
      console.warn(err)
    } finally {
      setFile(null)
      setIsInvalid(true)
      setData(null)
    }
  }

  const onSubmit = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    if (action === 'validate') {
      onValidateSubmit(formData) // call the save submit handler
    }
    if (action === 'update') {
      onUpdateSubmit(formData) // call the save submit handler
    }
  }

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
