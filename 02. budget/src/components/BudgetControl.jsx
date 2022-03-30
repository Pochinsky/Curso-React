const BudgetControl = ({budget}) => {
  const formatAmount = amount => amount.toLocaleString('es-CL',{
    style: 'currency',
    currency: 'CLP'
  })
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p><span>Presupuesto:</span> {formatAmount(budget)}</p>
        <p><span>Disponible:</span> {formatAmount(0)}</p>
        <p><span>Gastado:</span> {formatAmount(0)}</p>
      </div>
    </div>
  )
}

export default BudgetControl