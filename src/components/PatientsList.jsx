import Patient from './Patient'

const PatientsList = ({  patients, setPatient, removePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      { 
        patients && patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
            <p className="text-lg my-5 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">
                pacientes y citas
              </span>
            </p>
            <div className="md:h-5/6 lg:h-3/5 md:overflow-y-scroll">
              { patients.map((patient) => (
                <Patient 
                  key={patient.id} 
                  patient={patient} 
                  setPatient={setPatient} 
                  removePatient={removePatient}
                />)
              ) }
            </div>
          </>
        ) : 
        (
          <>
            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
            <p className="text-lg my-5 text-center">
              Comineza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">
                y apareceran en este lugar
              </span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default PatientsList
