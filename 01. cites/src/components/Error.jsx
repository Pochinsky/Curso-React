const Error = ({ message }) => {
  return (
    <div className="bg-red-800 text-white text-center mb-10 p-3 uppercase font-bold rounded">
      <p>{message}</p>
    </div>
  )
}

export default Error
