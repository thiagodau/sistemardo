import { useEffect, useState } from 'react'

import { ButtonGenerateRDO } from '../Components/Contract/ButtonGenerateRDO'
import { InformationsContract } from '../Components/Contract/InformationsContract'

import logoPrefeitura from '../Assets/logo-aquidauana.png'

import './Form.css'

export function Form() {

  const [numberOfContract, setNumberOfContract] = useState('');
  const [nameOfContract, setNameOfContract] = useState('');
  const [clientOfContract, setClientOfContract] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    /** AQUI TEM QUE VERIFICAR SE HÁ ALGO NO LOCALSTORARE E PREENCHER NOS CAMPOS DO FORMULARIO */
    if (localStorage) {
      const number = localStorage.getItem('@number') as any
      const client = localStorage.getItem('@client') as any
      const name = localStorage.getItem('@nameConstruction') as any
      const description = localStorage.getItem('@description') as any

      setNumberOfContract(number)
      setClientOfContract(client)
      setNameOfContract(name)
      setDescription(description)
    }
  }, [])

  return (
    <div id='form' className="Form">
      <div style={{ width: '100%', maxWidth: '400px', margin: '30px', padding: '20px', background: '#fff', borderRadius: '4px', boxShadow: '0px 0px 15px #555' }}>
        <div>
          <img src={logoPrefeitura} alt="Logomarca Prefeitura" width={'80px'} />
        </div>
        <InformationsContract
          number={numberOfContract}
          nameConstruction={nameOfContract}
          client={clientOfContract}
          description={description}
          numberF={setNumberOfContract}
          nameConstructionF={setNameOfContract}
          clientF={setClientOfContract}
          descriptionF={setDescription} />
        <ButtonGenerateRDO number={numberOfContract} nameConstruction={nameOfContract} client={clientOfContract} description={description} />
      </div>
    </div>
  )
}