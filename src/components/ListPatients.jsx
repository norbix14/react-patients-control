import Heading from './Heading'
import Patient from './Patient'
import EmptyData from './utils/errors/EmptyData'

function ListPatients({ patients, setPatient, deletePatientById }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 mb-10">
      <Heading
        header="listado de pacientes"
        paragraph="administrar "
        span="pacientes y citas"
      />
      <div className="md:h-screen overflow-y-auto px-4">
        {patients.length > 0 ? (
          patients.map((patient) => (
            <Patient
              patient={patient}
              key={patient.id}
              setPatient={setPatient}
              deletePatientById={deletePatientById}
            />
          ))
        ) : (
          <EmptyData message="Aún no hay pacientes dados de alta" />
        )}
      </div>
    </div>
  )
}

export default ListPatients
