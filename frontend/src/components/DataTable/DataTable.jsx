import React, { useContext } from 'react'
import TableRow from '../TableRow/TableRow'
import styles from './DataTable.module.scss'
import CsvContext from '../../context/CsvContext'

function DataTable() {
  const { data } = useContext(CsvContext)

  if (!data) {
    return null
  }
  const { productData } = data
  console.log(data)

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption className={styles['table-caption']}>dados do .csv</caption>
        <thead>
          <tr>
            <th className={styles['header-cell']}>código</th>
            <th className={styles['header-cell']}>nome</th>
            <th className={styles['header-cell']}>preço atual</th>
            <th className={styles['header-cell']} colSpan="999">
              novo preço
            </th>
          </tr>
        </thead>
        <tbody>
          {productData &&
            productData.map(CsvLine => <TableRow data={CsvLine} key={CsvLine.code} />)}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
