function PatientParagraph({ paragraph, span }) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {paragraph}
      <span className="font-normal normal-case">{span}</span>
    </p>
  )
}

export default PatientParagraph
