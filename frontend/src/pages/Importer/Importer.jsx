import React from 'react'
import { ToastContainer } from 'react-toastify'
import DropZone from '../../components/DropZone/DropZone'
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import DataTable from '../../components/DataTable/DataTable'
import ErrorPanel from '../../components/ErrorPanel/ErrorPanel'
import styles from './Importer.module.scss'
import 'react-toastify/dist/ReactToastify.css'

function Importer() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Importador de CSV</h1>
      <DropZone />
      <ErrorPanel />
      <ControlPanel />
      <DataTable />
      <ToastContainer />
    </main>
  )
}

export default Importer
