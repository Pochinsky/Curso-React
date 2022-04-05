import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import SpendingsList from './components/SpendingsList'
import { idGenerator } from './helpers'
import newSpendingIcon from './img/nuevo-gasto.svg'

const App = () => {
  // control de budget state
  const [budget, setBudget] = useState(0)
  // verify if the input budget is a valid budget
  const [isValidBudget, setIsValidBudget] = useState(false)
  // set or unset the modal window
  const [modal, setModal] = useState(false)
  // set or unset the modal animate
  const [modalAnimate, setModalAnimate] = useState(false)
  // save the spendings inputs
  const [spendings, setSpendings] = useState([])
  // to edit save spendings
  const [editSpend, setEditSpend] = useState({})
  // to detect a edit spend modal
  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setModal(true)
      setTimeout(() => {
        setModalAnimate(true)
      }, 500)
    }
  }, [editSpend])
  // open the modal if a click on new spending icon ocurred
  const handleNewSpending = () => {
    setEditSpend({})
    setModal(true)
    setTimeout(() => {
      setModalAnimate(true)
    }, 500);
  }
  // save the spending in the state when this is added
  const saveSpending = spending => {
    if (spending.id) {
      const actualizatedSpendings = spendings.map(
        spendingState => 
          spendingState.id === spending.id ? spending : spendingState
      )
      setSpendings(actualizatedSpendings)
    } else {
      spending.id = idGenerator()
      spending.date = Date.now()
      setSpendings([...spendings, spending])
    }
    setModalAnimate(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  return (
    <div className={modal && 'fijar'}>
      <Header
        spendings={spendings}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <SpendingsList
              spendings={spendings}
              setEditSpend={setEditSpend}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={newSpendingIcon} 
              alt="Icono de nuevo gasto" 
              onClick={handleNewSpending}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          modalAnimate={modalAnimate}
          setModalAnimate={setModalAnimate}
          saveSpending={saveSpending}
          editSpend={editSpend}
        />
      )}
    </div>
  )
}

export default App
