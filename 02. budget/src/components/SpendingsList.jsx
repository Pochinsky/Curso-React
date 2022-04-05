import Spending from "./Spending"

const SpendingsList = ({spendings, setEditSpend}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{spendings.length ? 'Gastos' : 'No hay gastos aun'}</h2>
      {spendings.map(spending => (
        <Spending
          key={spending.id}
          spending={spending}
          setEditSpend={setEditSpend}
        />
      ))}
    </div>
  )
}

export default SpendingsList