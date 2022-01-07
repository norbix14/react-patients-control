function ErrorMessage({ message }) {
  return (
    <div className="text-center p-2 bg-red-500 text-white font-bold my-2 rounded-md uppercase">
      <p>{ message }</p>
    </div>
  )
}

export default ErrorMessage
