import { useEffect, useState } from 'react'

import './Report.css'

import logoPrefeitura from '../Assets/logo-aquidauana.png'

export function Report() {
  useEffect(() => {
    $('#fileInputControl').on('change', fileInputControlChangeEventHandler)
    function fileInputControlChangeEventHandler(event: any) {
      let fileInputControl = event.target //pega a tag input
      let files = fileInputControl.files //pega os arquivos + de 1 e guarda na FileList
      let arrayLength = files.length //pega quantidade de imagens == tamanho da lista
      $('#images').html(''); //limpa a div de imagens para carregar novas imagens
      let arrayOfImages = []
      for (let index = 0; index < arrayLength; index++) {
        arrayOfImages.push(files[index])
      }

      for (let indexy = 0; indexy < arrayLength; indexy++) {
        let fileReader = new FileReader()
        fileReader.onload = function (event: any) {
          let dataUrl = event.target.result
          $('#images').prepend($('<img>', { id: 'theImg', src: dataUrl }))
        }
        fileReader.readAsDataURL(arrayOfImages[indexy])
      }
    }

    const nameLocalStorage = localStorage.getItem('@nameConstruction')
    const clientLocalStorage = localStorage.getItem('@client')
    const numberLocalStorage = localStorage.getItem('@number')
    const descriptionLocalStorage = localStorage.getItem('@description')

    setData({
      name: nameLocalStorage,
      client: clientLocalStorage,
      number: numberLocalStorage,
      description: descriptionLocalStorage
    })

    //DATA DO DIA
    let date = new Date();
    let dateCurrent = date.toLocaleDateString('pt-BR');
    setDateCurrent(dateCurrent)
  }, [])

  const [data, setData] = useState({} as any);
  const [dateCurrent, setDateCurrent] = useState('');

  return (
    <div>
      <div className='report-area'>
        <div className='report-buttons'>
          <input
            type="button"
            value="IMPRIMIR RDO"
            onClick={() => { window.print() }} />
          <input
            type="button"
            value="ALTERAR INFORMAÇÕES"
            onClick={() => { window.location.replace('/') }} />
          <input
            type="button"
            value="REFAZER"
            onClick={() => {
              localStorage.clear();
              window.location.replace('/')
            }} />
        </div>
      </div>

      <div className="report">
        <div className='report-header'>
          <img src={logoPrefeitura} alt="Prefeitura de Aquidauana" width={'80px'} />
          <h2>Relatório Diário de Obra (RDO)</h2>
        </div>
        <div className='report-content'>
          <div>
            <p><strong>Número do Contrato:</strong> {data.number}</p>
            <p><strong>Obra:</strong> {data.name}</p>
            <p><strong>Cliente:</strong> {data.client}</p>
          </div>
          <div>
            <p><strong> Data do Relatório:</strong> {dateCurrent}</p>
          </div>
        </div>

        <div className="report-description">
          <p><strong>Atividades</strong></p>
          <p>
            {data.description}
          </p>
        </div>

        <div className='report-pictures'>
          <form>
            <input
              type="file"
              name="images"
              id="fileInputControl"
              accept="image/*"
              multiple
            />
          </form>

          <div id='images'>
          </div>
        </div>
        <div className='report-signature'>
          <div>
            <span>______________________________</span>
            <p>Assinatura</p>
          </div>
          <div>
            <span>______________________________</span>
            <p>Assinatura</p>
          </div>
        </div>
      </div >
    </div>
  )
}