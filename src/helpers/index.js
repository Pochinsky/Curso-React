// generate an id
export const idGenerator = () => {
  const random = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)
  return random + date
}

export const formatAmount = amount => amount.toLocaleString('es-CL',{
  style: 'currency',
  currency: 'CLP'
})

export const formatDate = date => {
  const newDate = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return newDate.toLocaleDateString('es-ES',options)
}