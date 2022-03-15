import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'

const App = () => {
  // state of patients registered
  const [ patients, setPatients] = useState([])
  // state of patient register
  const [patient, setPatient] = useState({})
  // to remove patients
  const removePatient = (id) => {
    const actualizatedPatients = patients.filter((patientAux) => patientAux.id !== id)
    setPatients(actualizatedPatients)
  }
  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPatients(patientsLocalStorage)
    }
    getLocalStorage()
  }, [])
  // to save patients in local storage
  useEffect(() => {
    localStorage.setItem("pacientes",JSON.stringify(patients))
  }, [patients])
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patient={patient}
          patients={patients}
          setPatient={setPatient}
          setPatients={setPatients} 
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  )
}

export default App
