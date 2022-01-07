function Heading({ header, paragraph, span }) {
  return (
    <div className="capitalize">
      <h2 className="font-black text-3xl text-center">{header}</h2>
      <p className="text-lg mt-5 text-center mb-10">
        {paragraph}
        <span className="text-indigo-600 font-bold">{span}</span>
      </p>
    </div>
  )
}

export default Heading
