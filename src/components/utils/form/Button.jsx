function Button(props) {
  const { className } = props
  const btnCn = `uppercase text-white p-3 rounded-md transition-all font-bold cursor-pointer ${className}`
  return (
    <button {...props} className={btnCn}>
      {props.children}
    </button>
  )
}

export default Button
