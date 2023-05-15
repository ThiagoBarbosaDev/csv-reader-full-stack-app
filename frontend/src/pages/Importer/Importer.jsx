import React from 'react'
import styles from './Importer.module.scss'
import DropZone from '../../components/DropZone/DropZone'

function Importer() {
  return (
    <div>
      <span className={styles['font-big']}>hello world</span>
      <DropZone />
    </div>
  )
}

export default Importer
