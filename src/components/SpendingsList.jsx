import Spending from "./Spending"

const SpendingsList = ({
  spendings, 
  setEditSpend, 
  deleteSpending,
  filter,
  filterSpendings
}) => {
  return (
    <div className="listado-gastos contenedor">
      {
        filter ? (
          <>
            <h2>{filterSpendings.length ? 'Gastos' : 'No hay gastos aun'}</h2>
            {
              filterSpendings.map(spending => (
                <Spending
                  key={spending.id}
                  spending={spending}
                  setEditSpend={setEditSpend}
                  deleteSpending={deleteSpending}
                />)
              )
            }
          </>
        ) : (
          <>
            <h2>{spendings.length ? 'Gastos' : 'No hay gastos aun'}</h2>
            {
              spendings.map(spending => (
                <Spending
                  key={spending.id}
                  spending={spending}
                  setEditSpend={setEditSpend}
                  deleteSpending={deleteSpending}
                />)
              )
            }
          </>
        )
      }
    </div>
  )
}

export default SpendingsList