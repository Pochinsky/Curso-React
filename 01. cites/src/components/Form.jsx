import { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({ patient, patients, setPatient, setPatients }) => {
  // state to each field of form
  const [petName, setPetName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptoms, setSymptoms] = useState('')
  // state of error in form
  const [error, setError] = useState(false)
  // useEffect to patient edit
  useEffect(()=>{
    if (Object.keys(patient).length > 0) {
      // set properties on inputs
      setPetName(patient.petName)
      setOwnerName(patient.ownerName)
      setEmail(patient.email)
      setDischargeDate(patient.dischargeDate)
      setSymptoms(patient.symptoms)
    }
  },[patient])
  // id generator
  const generateID = () => {
    const random = Math.random().toString(36).substr(2)
    const date  = Date.now().toString(36)
    return random + date
  }
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // form validation
    if ([petName, ownerName, email, dischargeDate, symptoms].includes('')) {
      setError(true)
      return
    }
    setError(false)
    let patientObject = {
      petName, 
      ownerName, 
      email, 
      dischargeDate, 
      symptoms,
    }
    if (patient.id) { // edit an exist patient
      patientObject.id = patient.id
      const actualizatedPatients = patients.map(
        (patientAux) => patientAux.id === patient.id ? patientObject : patientAux
      )
      setPatients(actualizatedPatients)
      setPatient({})
    }
    else { // add new patient
      patientObject.id = generateID()
      setPatients([...patients, patientObject])
    }
    // reset form
    setPetName('')
    setOwnerName('')
    setEmail('')
    setDischargeDate('')
    setSymptoms('')
  }
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg my-5 text-center">
        Agrega pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">
          administralos
        </span>
      </p>
      <form 
        className="my-5 mx-3 bg-white shadow-md rounded-lg py-5 px-5"
        onSubmit={handleSubmit}
      >
        { error && <Error message={'Todos los campos son obligatorios'} /> }
        <div className="my-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">Nombre de Mascota</label>
          <input 
            id="petName"
            type="text"
            placeholder="Nombre Mascota"
            value={petName}
            className={`
              border-2 
              w-full 
              p-2 
              my-2 
              placeholder-gray-400 
              rounded-md 
              focus:border-indigo-400 
              focus:outline-none 
              transition-colors
            `}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="ownerName" className="block text-gray-700 uppercase font-bold">Nombre del Dueño o Dueña</label>
          <input 
            id="ownerName"
            type="text"
            placeholder="Nombre Dueño/Dueña"
            value={ownerName}
            className={`
              border-2 
              w-full 
              p-2 
              my-2 
              placeholder-gray-400 
              rounded-md 
              focus:border-indigo-400 
              focus:outline-none 
              transition-colors
            `}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del Dueño o Dueña</label>
          <input 
            id="email"
            type="email"
            placeholder="Email Dueño/Dueña"
            value={email}
            className={`
              border-2 
              w-full 
              p-2 
              my-2 
              placeholder-gray-400 
              rounded-md 
              focus:border-indigo-400 
              focus:outline-none 
              transition-colors
            `}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="dischargeDate" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
          <input 
            id="dischargeDate"
            type="date"
            value={dischargeDate}
            className={`
              border-2 
              w-full 
              p-2 
              my-2 
              placeholder-gray-400 
              rounded-md 
              focus:border-indigo-400 
              focus:outline-none 
              transition-colors
            `}
            onChange={(e) => setDischargeDate(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
            id="symptom"
            placeholder="Sintomas"
            value={symptoms}
            className={`
              border-2 
              w-full 
              p-2 
              my-2 
              placeholder-gray-400 
              rounded-md 
              focus:border-indigo-400 
              focus:outline-none 
              transition-colors
            `}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input 
          type="submit"
          value={
            patient.id ? "Editar Paciente" : "Agregar Paciente"
          }
          className={`
            bg-indigo-600 
            w-full 
            my-3
            p-3 
            text-white 
            uppercase 
            font-bold 
            hover:bg-indigo-800 
            hover:cursor-pointer 
            transition-all 
            duration-300 
            rounded
            shadow-md
          `}
        />
      </form>
    </div>
  )
}

export default Form
