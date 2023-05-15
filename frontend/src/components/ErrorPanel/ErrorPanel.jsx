import React, { useContext } from 'react'
import CsvContext from '../../context/CsvContext'
import styles from './ErrorPanel.module.scss'

function ErrorPanel() {
  const { errors } = useContext(CsvContext)

  const productCodeNotFoundErrors = errors?.filter(error =>
    error?.message?.includes('Código do produto não encontrado')
  )
  const validationErrors = errors?.filter(error => error?.context?.key)

  const shouldRenderError = errors && productCodeNotFoundErrors.length
  return (
    <section className={styles.container}>
      {validationErrors &&
        validationErrors.map(validationError => (
          <span className={styles.error}>
            {validationError.message.replace('##', validationError.path[0] + 1)}
          </span>
        ))}
      {!!shouldRenderError && (
        <div>
          <p className={styles['error-caption']}>
            Códigos dos produtos não encontrados no banco de dados:
          </p>
          {productCodeNotFoundErrors.map(notFoundError => (
            <span className={styles.error} key={notFoundError.context.product_code}>
              {notFoundError.context.product_code}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}

export default ErrorPanel
