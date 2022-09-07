const Message = ({children, typeAlert}) => {
  return (
    <div className={`alerta ${typeAlert}`}>
      {children}
    </div>
  )
}

export default Message