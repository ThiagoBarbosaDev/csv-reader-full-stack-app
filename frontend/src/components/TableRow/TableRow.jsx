import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './TableRow.module.scss'
import CsvContext from '../../context/CsvContext'

function TableRow({ data }) {
  const {
    data: { csvData },
    errors,
  } = useContext(CsvContext)

  const newPrice = csvData?.find(csvLine => Number(csvLine.product_code) === data.code).new_price
  const csvErrors = errors?.find(err => Number(err.context.product_code) === data.code)

  return (
    <tr className={styles['data-row']}>
      <td className={styles['data-cell']} data-cell="Codigo">
        {data.code}
      </td>
      <td className={styles['data-cell']} data-cell="Nome">
        {data.name}
      </td>
      <td className={styles['data-cell']} data-cell="Preço Atual">
        {data.salesPrice}
      </td>
      <td
        className={classNames(styles['data-cell'], {
          [styles.error]: csvErrors?.message?.includes('PRICE'),
        })}
        data-cell="Novo Preço"
      >
        {newPrice}
      </td>
      {csvErrors?.message?.includes('PRICE') && (
        <td
          className={classNames(styles['data-cell'], {
            [styles.error]: csvErrors?.message?.includes('PRICE'),
          })}
        >
          {csvErrors.message}
        </td>
      )}
    </tr>
  )
}

TableRow.propTypes = {
  data: PropTypes.shape({
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    salesPrice: PropTypes.string.isRequired,
  }).isRequired,
}

export default TableRow
