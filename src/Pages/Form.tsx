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
  const [location, setLocation] = useState('');
  const [processAdm, setProcessAdm] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [oversight, setOversight] = useState('');

  useEffect(() => {
    /** AQUI TEM QUE VERIFICAR SE HÁ ALGO NO LOCALSTORARE E PREENCHER NOS CAMPOS DO FORMULARIO */
    if (localStorage) {
      const number = localStorage.getItem('@number') as any
      const client = localStorage.getItem('@client') as any
      const name = localStorage.getItem('@nameConstruction') as any
      const description = localStorage.getItem('@description') as any
      const location = localStorage.getItem('@location') as any
      const processAdm = localStorage.getItem('@processAdm') as any
      const measurement = localStorage.getItem('@measurement') as any
      const oversight = localStorage.getItem('@oversight') as any
      setNumberOfContract(number)
      setClientOfContract(client)
      setNameOfContract(name)
      setDescription(description)
      setLocation(location)
      setProcessAdm(processAdm)
      setMeasurement(measurement)
      setOversight(oversight)
    }
  }, [])

  return (
    <div id='form' className="Form">
      <div style={{ width: '100%', maxWidth: '600px', margin: '30px', padding: '20px', background: '#fff', borderRadius: '4px', boxShadow: '0px 0px 15px #555' }}>
        <div>
          <img src={logoPrefeitura} alt="Logomarca Prefeitura" width={'80px'} />
          <h3>Diário de Obra</h3>
          <br />
        </div>
        <InformationsContract
          numberF={setNumberOfContract}
          nameConstructionF={setNameOfContract}
          clientF={setClientOfContract}
          descriptionF={setDescription}
          locationF={setLocation}
          processAdmF={setProcessAdm}
          measurementF={setMeasurement}
          oversightF={setOversight}
        />
        <ButtonGenerateRDO
          number={numberOfContract}
          nameConstruction={nameOfContract}
          client={clientOfContract}
          description={description}
          location={location}
          processAdm={processAdm}
          measurement={measurement}
          oversight={oversight}
        />
      </div>
    </div>
  )
}