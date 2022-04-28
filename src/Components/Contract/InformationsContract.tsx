import './InformationsContract.css'

type InformationsContractProps = {
  numberF: Function,
  nameConstructionF: Function,
  clientF: Function,
  descriptionF: Function,
  locationF: Function,
  processAdmF: Function,
  measurementF: Function,
  oversightF: Function,
}

export function InformationsContract(props: InformationsContractProps) {
  return (
    <div className="informationsContract">
      <p>
        <input type="text" placeholder="Nome da Obra" onChange={(e) => { props.nameConstructionF(e.target.value) }} />
      </p>
      <p>
        <input type="text" placeholder="Número do Contrato" onChange={(e) => { props.numberF(e.target.value) }} />
        <input type="text" placeholder="Processo Administrativo" onChange={(e) => { props.processAdmF(e.target.value) }} />
      </p>
      <p>
        <input type="text" placeholder="Medição" onChange={(e) => { props.measurementF(e.target.value) }} />
        <input type="text" placeholder="Empresa" onChange={(e) => { props.clientF(e.target.value) }} />
      </p>
      <p>
        <input type="text" placeholder="Fiscalização" onChange={(e) => { props.oversightF(e.target.value) }} />
        <input type="text" placeholder="Local" onChange={(e) => { props.locationF(e.target.value) }} />
      </p>
      <p>
        <textarea placeholder='Atividades que foram feitas...' onChange={(e) => { props.descriptionF(e.target.value) }}
          style={{ width: '100%', minHeight: '100px' }}></textarea>
      </p>
    </div>
  )
}