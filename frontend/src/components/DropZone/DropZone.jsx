/* eslint-disable no-console */
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaFileCsv } from 'react-icons/fa'
import axios from 'axios'
import styles from './DropZone.module.scss'

const endpoint = 'http://localhost:3001/validate'

function DropZone() {
  const onDrop = useCallback(async acceptedFiles => {
    console.log(acceptedFiles)
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])
    const response = await axios.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log(response)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'text/csv',
  })

  return (
    <div className={styles.container}>
      <div {...getRootProps()} className={styles['drop-area']}>
        <input {...getInputProps()} name="file" />
        <p>Arraste seu arquivo .CSV aqui</p>
        <FaFileCsv className={styles['csv-icon']} />
      </div>
    </div>
  )
}

export default DropZone
