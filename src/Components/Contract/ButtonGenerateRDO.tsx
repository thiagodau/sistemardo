import { Link } from 'react-router-dom'
import './ButtonGenerateRDO.css'

type RdoProps = {
  number: string,
  nameConstruction: string,
  client: string,
  description: string,
  location: string
}

export function ButtonGenerateRDO(props: RdoProps) {
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      console.log('You must have pressed Enter ')
      localStorage.setItem('@number', props.number)
      localStorage.setItem('@nameConstruction', props.nameConstruction)
      localStorage.setItem('@client', props.client)
      localStorage.setItem('@description', props.description)
      localStorage.setItem('@location', props.location)
    }
  }

  return (
    <div>

      <div className="button-generate" onKeyDown={handleKeyPress}>
        <Link to={'/report'} style={{ color: '#fff' }}>
          <button
            onClick={() => {
              localStorage.setItem('@number', props.number)
              localStorage.setItem('@nameConstruction', props.nameConstruction)
              localStorage.setItem('@client', props.client)
              localStorage.setItem('@description', props.description)
              localStorage.setItem('@location', props.location)
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
