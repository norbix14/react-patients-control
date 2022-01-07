import Button from './utils/form/Button'
import PatientParagraph from './utils/paragraphs/PatientParagraph'

function Patient({ patient, setPatient, deletePatientById }) {
  const { id } = patient
  const dataMap = {
    id: 'ID: ',
    pet: 'Nombre: ',
    owner: 'Dueño: ',
    email: 'Email: ',
    date: 'Fecha de alta: ',
    symptoms: 'Síntomas: ',
  }

  const handleEdit = () => setPatient(patient)

  const handleDelete = () => {
    const confirmDelete = confirm('¿Estás seguro?')
    if (confirmDelete) {
      deletePatientById(id)
    }
  }

  return (
    <div className="mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
      {Object.keys(patient).map((k, i) => (
        <PatientParagraph key={i} paragraph={dataMap[k]} span={patient[k]} />
      ))}
      <div className="actions flex justify-between mt-10">
        <Button
          type="button"
          className="hover:bg-blue-600 bg-blue-500"
          onClick={handleEdit}
        >
          editar
        </Button>
        <Button
          type="button"
          className="btn uppercase text-white p-3 rounded-md transition-all hover:bg-red-600 bg-red-500"
          onClick={handleDelete}
        >
          eliminar
        </Button>
      </div>
    </div>
  )
}

export default Patient
