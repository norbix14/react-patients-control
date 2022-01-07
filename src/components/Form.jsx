import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid/async'
import ErrorMessage from './utils/errors/ErrorMessage'
import Input from './utils/form/Input'
import Textarea from './utils/form/Textarea'
import Heading from './Heading'
import Button from './utils/form/Button'
import { useHandlerInputChange } from '../hooks/useHandlerInputChange'

function Form({ setPatients, setPatient, patient }) {
  const initialState = {
    pet: '',
    owner: '',
    email: '',
    date: '',
    symptoms: '',
  }
  const [newPatient, handleChange, setNewPatient, resetForm] =
    useHandlerInputChange(initialState)
  const [isEmpty, setIsEmpty] = useState(false)

  const { pet, owner, email, date, symptoms } = newPatient
  const patientExist = Object.keys(patient).length > 0

  const cleanValues = (obj) => Object.values(obj).map((val) => val.trim())

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cleanValues(newPatient).includes('')) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
      const patientId = patientExist ? patient.id : await nanoid()
      if (patientExist) {
        setPatients((patients) => {
          return patients.map((p) => (p.id === patientId ? newPatient : p))
        })
      } else {
        setPatients((patients) => {
          return [...patients, { ...newPatient, id: patientId }]
        })
      }
      resetForm()
      setPatient({})
    }
  }

  useEffect(() => {
    if (patientExist) {
      setNewPatient(patient)
    }
  }, [patient])

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">
      <Heading
        header="seguimiento de pacientes"
        paragraph="añadir pacientes "
        span="administrarlos"
      />
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {isEmpty && <ErrorMessage message="Ningún campo debe quedar vacío" />}
        <Input
          label="nombre mascota"
          htmlFor="pet"
          type="text"
          placeholder="Nombre de la mascota"
          value={pet}
          onChange={handleChange}
        />
        <Input
          label="dueño"
          htmlFor="owner"
          type="text"
          placeholder="Nombre del dueño"
          value={owner}
          onChange={handleChange}
        />
        <Input
          label="email de contacto"
          htmlFor="email"
          type="email"
          placeholder="Email de contacto"
          value={email}
          onChange={handleChange}
        />
        <Input
          label="fecha de alta"
          htmlFor="date"
          type="date"
          placeholder="Fecha de alta"
          value={date}
          onChange={handleChange}
        />
        <Textarea
          label="síntomas"
          htmlFor="symptoms"
          placeholder="Síntomas de la mascota"
          defaultValue={symptoms}
          onChange={handleChange}
        />
        <Button
          className="bg-green-600 w-full hover:bg-green-700"
          type="submit"
        >
          {patientExist ? 'Editar paciente' : 'Agregar paciente'}
        </Button>
      </form>
    </div>
  )
}

export default Form
