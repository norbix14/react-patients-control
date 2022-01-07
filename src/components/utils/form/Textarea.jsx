function Textarea(props) {
  const {
    htmlFor,
    label,
    placeholder,
    labelClassname = '',
    textareaClassname = '',
    defaultValue = '',
    onChange,
  } = props
  const labelCn = 'block text-gray-700 uppercase font-bold ' + labelClassname
  const textareaCn =
    'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' +
    textareaClassname
  return (
    <div className="input-data mb-5">
      <label htmlFor={htmlFor} className={labelCn}>
        {label}
      </label>
      <textarea
        className={textareaCn}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        onChange={onChange}
        value={defaultValue}
      />
    </div>
  )
}

export default Textarea
