function Input(props) {
  const {
    htmlFor,
    label,
    placeholder,
    type,
    labelClassname = '',
    inputClassname = '',
    value = '',
    onChange,
  } = props
  const labelCn = 'block text-gray-700 uppercase font-bold ' + labelClassname
  const inputCn =
    'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' + inputClassname
  return (
    <div className="input-data mb-5">
      <label htmlFor={htmlFor} className={labelCn}>
        {label}
      </label>
      <input
        className={inputCn}
        type={type}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
