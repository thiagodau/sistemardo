import { Link } from 'react-router-dom'
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
        <Link to={'/report'}>
          <button
            onClick={() => {
              localStorage.setItem('@number', props.number)
              localStorage.setItem('@nameConstruction', props.nameConstruction)
              localStorage.setItem('@client', props.client)
              localStorage.setItem('@description', props.description)
            }}>
            Gerar RDO
          </button>
        </Link>

      </div>
      <div>

        <p style={{ fontSize: '11px', marginTop: '10px', color: '#d30034' }}>Versão de Teste @v1</p>
      </div>
    </div>
  )
}
