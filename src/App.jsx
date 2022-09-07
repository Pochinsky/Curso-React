import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import SpendingsList from './components/SpendingsList'
import Filters from './components/Filters'
import { idGenerator } from './helpers'
import newSpendingIcon from './img/nuevo-gasto.svg'

const App = () => {
  // control de budget state
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  // verify if the input budget is a valid budget
  const [isValidBudget, setIsValidBudget] = useState(false)
  // set or unset the modal window
  const [modal, setModal] = useState(false)
  // set or unset the modal animate
  const [modalAnimate, setModalAnimate] = useState(false)
  // save the spendings inputs
  const [spendings, setSpendings] = useState(
    localStorage.getItem('spendings') ? JSON.parse(localStorage.getItem('spendings')) : []
  )
  // to edit save spendings
  const [editSpend, setEditSpend] = useState({})
  // to filter spendings
  const [filter, setFilter] = useState('')
  // to save filter spendings
  const [filterSpendings, setFilterSpendings] = useState([])
  // to detect a edit spend modal
  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setModal(true)
      setTimeout(() => {
        setModalAnimate(true)
      }, 500)
    }
  }, [editSpend])
  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])
  useEffect(() => {
    const budgetLocalStorage = Number(localStorage.getItem('budget'))
    if (budgetLocalStorage > 0)
      setIsValidBudget(true)
  }, [])
  useEffect(() => {
    localStorage.setItem('spendings',JSON.stringify(spendings) ?? [])
  }, [spendings])
  useEffect(() => {
    if (filter) {
      const filterSpendingsAux = spendings.filter(
        spending => spending.category === filter
      )
      setFilterSpendings(filterSpendingsAux)
    }
  },[filter])
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
      setEditSpend({})
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
  const deleteSpending = id => {
    const actualizatedSpendings = spendings.filter(spendingAux => spendingAux.id !== id)
    setSpendings(actualizatedSpendings)
  }
  return (
    <div className={modal && 'fijar'}>
      <Header
        spendings={spendings}
        setSpendings={setSpendings}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
            <SpendingsList
              spendings={spendings}
              setEditSpend={setEditSpend}
              deleteSpending={deleteSpending}
              filter={filter}
              filterSpendings={filterSpendings}
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
          setEditSpend={setEditSpend}
        />
      )}
    </div>
  )
}

export default App
