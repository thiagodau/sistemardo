import './InformationsContract.css'

type InformationsContractProps = {
  numberF: Function,
  nameConstructionF: Function,
  clientF: Function,
  descriptionF: Function,
  locationF: Function
}

export function InformationsContract(props: InformationsContractProps) {
  return (
    <div className="informationsContract">
      <input type="text" placeholder="Número do contrato" onChange={(e) => { props.numberF(e.target.value) }} />
      <input type="text" placeholder="Nome da Obra" onChange={(e) => { props.nameConstructionF(e.target.value) }} />
      <input type="text" placeholder="Cliente" onChange={(e) => { props.clientF(e.target.value) }} />
      <input type="text" placeholder="Local" onChange={(e) => { props.locationF(e.target.value) }} />
      <textarea placeholder='Atividades que foram feitas...' onChange={(e) => { props.descriptionF(e.target.value) }} style={{ width: '100%', minHeight: '200px' }}      ></textarea>
    </div>
  )
}