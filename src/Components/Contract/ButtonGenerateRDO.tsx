import './ButtonGenerateRDO.css'

type RdoProps = {
  number: string,
  nameConstruction: string,
  client: string,
  description: string,
}

export function ButtonGenerateRDO(props: RdoProps) {
  return (
    <div>

      <div className="button-generate">
        <button
          onClick={() => {
            localStorage.setItem('@number', props.number)
            localStorage.setItem('@nameConstruction', props.nameConstruction)
            localStorage.setItem('@client', props.client)
            localStorage.setItem('@description', props.description)
            window.location.replace('/report')
          }}>Gerar RDO</button>

      </div>
      <div>

        <p style={{ fontSize: '11px', marginTop: '10px', color: '#d30034' }}>Versão de Teste @v1</p>
      </div>
    </div>
  )
}
