import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { idGenerator } from './helpers'
import newSpendingIcon from './img/nuevo-gasto.svg'

const App = () => {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimate, setModalAnimate] = useState(false)
  const [spendings, setSpendings] = useState([])
  const handleNewSpending = () => {
    setModal(true)
    setTimeout(() => {
      setModalAnimate(true)
    }, 500);
  }
  const saveSpending = spending => {
    spending.id = idGenerator()
    setSpendings([...spendings, spending])
    setModalAnimate(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img 
            src={newSpendingIcon} 
            alt="Icono de nuevo gasto" 
            onClick={handleNewSpending}
          />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          modalAnimate={modalAnimate}
          setModalAnimate={setModalAnimate}
          saveSpending={saveSpending}
        />
      )}
    </div>
  )
}

export default App
