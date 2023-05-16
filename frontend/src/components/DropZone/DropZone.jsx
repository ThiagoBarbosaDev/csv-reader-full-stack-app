/* eslint-disable no-console */
import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaFileCsv } from 'react-icons/fa'
import styles from './DropZone.module.scss'
import CsvContext from '../../context/CsvContext'

function DropZone() {
  const { setFile, setIsInvalid } = useContext(CsvContext)

  const onDrop = useCallback(async acceptedFiles => {
    setIsInvalid(true)
    setFile(acceptedFiles[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // reason: react guarantees setters aren't going to change between renders
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <section className={styles.container}>
      <div {...getRootProps()} className={styles['drop-area']}>
        <input {...getInputProps()} name="file" />
        <span>Clique aqui para fazer o upload do seu .CSV</span>
        <FaFileCsv className={styles['csv-icon']} />
      </div>
    </section>
  )
}

export default DropZone
