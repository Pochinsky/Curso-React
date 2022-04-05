import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { formatAmount } from "../helpers"

const BudgetControl = ({
  budget,
  setBudget,
  spendings,
  setSpendings,
  setIsValidBudget
}) => {
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)
  useEffect(()=> {
    const totalSpent = spendings.reduce((total, spentAux) => spentAux.amount + total,0)
    const totalAvailabe = budget - totalSpent
    const newPercentage = (((budget - totalAvailabe) / budget) * 100).toFixed(2)
    setSpent(totalSpent)
    setAvailable(totalAvailabe)
    setTimeout(() => {
      setPercentage(newPercentage)
    }, 1000)
  },[spendings])
  const handleResetApp = () => {
    const result = confirm('Deseas reiniciar tu presupuesto y tus gastos?')
    if (result) {
      setSpendings([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% gastado`}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button 
          className="reset-app" 
          type="button"
          onClick={handleResetApp}
        >
          Resetear App
        </button>
        <p><span>Presupuesto:</span> {formatAmount(budget)}</p>
        <p className={`${available < 0 ? 'negativo' : ''}`}><span>Disponible:</span> {formatAmount(available)}</p>
        <p><span>Gastado:</span> {formatAmount(spent)}</p>
      </div>
    </div>
  )
}

export default BudgetControl