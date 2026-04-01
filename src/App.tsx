import './App.scss'
import { useState } from 'react'
import ContainerPrice from './components/ContainerPrice/ContainerPrice'
import { MobileVs4 } from './components/MobileVs4'

function App() {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  return (
    <div className="app-shell">
      <MobileVs4 onOpenModal={() => setIsPriceModalOpen(true)} />
      <ContainerPrice
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
      />
    </div>
  )
}

export default App
