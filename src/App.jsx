import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [patients, setPatients] = useLocalStorage('patients', [])
  const [patient, setPatient] = useState({})

  const deletePatientById = (id) => {
    setPatients((patients) => {
      return patients.filter((patient) => patient.id !== id)
    })
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex gap-4">
        <Form
          setPatients={setPatients}
          setPatient={setPatient}
          patient={patient}
        />
        <ListPatients
          patients={patients}
          setPatient={setPatient}
          deletePatientById={deletePatientById}
        />
      </div>
    </div>
  )
}

export default App
