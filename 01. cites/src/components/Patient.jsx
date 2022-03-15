const Patient = ({ patient, setPatient, removePatient }) => {
  const {petName, ownerName, email, dischargeDate, symptoms, id} = patient
  const handleRemove = () => {
    const remove = confirm("Deseas eliminar este paciente?")
    if (remove) removePatient(id)
  }
  return (
    <div className="mb-5 mx-3 bg-white shadow-md rounded-lg py-10 px-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {''}
        <span className="font-normal normal-case">
          {petName}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Dueño(a): {''}
        <span className="font-normal normal-case">
          {ownerName}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email Dueño(a): {''}
        <span className="font-normal normal-case">
          {email}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
        <span className="font-normal normal-case">
          {dischargeDate}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">
          {symptoms}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button 
          type="button" 
          className={`
            py-2 
            px-10 
            bg-amber-500 
            hover:bg-amber-700 
            text-white 
            font-bold 
            uppercase 
            rounded 
            transition-colors 
            duration-300 
          `}
          onClick={() => setPatient(patient)}
        >Editar</button>
        <button 
          type="button"
          className={`
            py-2 
            px-10 
            bg-red-500 
            hover:bg-red-700 
            text-white 
            font-bold 
            uppercase 
            rounded 
            transition-colors 
            duration-300 
          `}
          onClick={handleRemove}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Patient
