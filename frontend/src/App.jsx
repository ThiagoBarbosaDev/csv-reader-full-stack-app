import React from 'react'
import Importer from './pages/Importer/Importer'
import CsvProvider from './context/CsvProvider'

function App() {
  return (
    <CsvProvider>
      <Importer />
    </CsvProvider>
  )
}

export default App
