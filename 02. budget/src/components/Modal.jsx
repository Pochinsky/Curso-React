import { useState, useEffect } from 'react'
import Message from './Message'
import btnClose from '../img/cerrar.svg'

const Modal = ({
  setModal, 
  modalAnimate, 
  setModalAnimate, 
  saveSpending,
  editSpend,
  setEditSpend
}) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [id, setId] = useState('')
  const [date, setDate] = useState('')
  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setName(editSpend.name)
      setAmount(editSpend.amount)
      setCategory(editSpend.category)
      setId(editSpend.id)
      setDate(editSpend.date)
    }
  }, [])
  const hiddenModal = () => {
    setModalAnimate(false)
    setEditSpend({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  const handleSubmit = e => {
    e.preventDefault()
    if ([name, amount, category].includes('')) {
      setMessage('Todos los campos son obligatorios')
      setTimeout(() => {
        setMessage('')
      }, 3000);
      return
    }
    saveSpending({name, amount, category, id, date})
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={btnClose} 
          alt="Icono de cerrar modal" 
          onClick={hiddenModal}
        />
      </div>
      <form 
        className={`formulario ${modalAnimate ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{editSpend.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {message && (<Message typeAlert="error">{message}</Message>)}
        <div className="campo">
          <label htmlFor="nombre">
            Nombre Gasto
          </label>
          <input 
              type="text" 
              id="nombre" 
              placeholder="Añade el nombre del gasto"
              value={name}
              onChange={e => setName(e.target.value)}
            />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">
            Cantidad
          </label>
          <input 
              type="number" 
              id="cantidad" 
              placeholder="Añade la cantidad del gasto"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
            />
        </div>
        <div className="campo">
          <label htmlFor="categoria">
            Categoria
          </label>
          <select 
            id="categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Seleccionar Categoria --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value={editSpend.name ? 'Guardar Cambios' : 'Añadir Gasto'} />
      </form>
    </div>
  )
}

export default Modal