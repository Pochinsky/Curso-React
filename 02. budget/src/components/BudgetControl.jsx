import { useEffect, useState } from "react"
import { formatAmount } from "../helpers"

const BudgetControl = ({budget, spendings}) => {
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  useEffect(()=> {
    const totalSpent = spendings.reduce((total, spentAux) => spentAux.amount + total,0)
    setSpent(totalSpent)
    const totalAvailabe = budget - totalSpent
    setAvailable(totalAvailabe)
  },[spendings])
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p><span>Presupuesto:</span> {formatAmount(budget)}</p>
        <p><span>Disponible:</span> {formatAmount(available)}</p>
        <p><span>Gastado:</span> {formatAmount(spent)}</p>
      </div>
    </div>
  )
}

export default BudgetControl