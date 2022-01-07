import { useState } from 'react'

/**
 * Hook personalizado para modificar el estado.
 *
 * @param {any} initialState - estado inicial.
 *
 * @example
 * const initialState = { name: 'norberto', email: 'norberto@mail.com' }
 * const [values, handleChange, setValues, reset] = useHandlerInputChange(initialState)
 *
 * @returns un array con el estado, una función para utilizar en
 * el `onChange` de un `input` y actualizar el estado, otra función para 
 * cambiar directamente el estado y otra función para resetear el estado
 * al valor inicial.
 */
export function useHandlerInputChange(initialState) {
  const [values, setValues] = useState(initialState)
  const reset = () => setValues(initialState)
  const handleInputChange = (e) => {
    const { target } = e
    const { name, value } = target
    setValues((values) => {
      return {
        ...values,
        [name]: value,
      }
    })
  }
  return [values, handleInputChange, setValues, reset]
}
