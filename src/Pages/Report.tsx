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
    const locationLocalStorage = localStorage.getItem('@location')
    const processAdmLocalStorage = localStorage.getItem('@processAdm')
    const measurementLocalStorage = localStorage.getItem('@measurement')
    const oversightLocalStorage = localStorage.getItem('@oversight')

    setData({
      name: nameLocalStorage,
      client: clientLocalStorage,
      number: numberLocalStorage,
      description: descriptionLocalStorage,
      location: locationLocalStorage,
      processAdm: processAdmLocalStorage,
      measurement: measurementLocalStorage,
      oversight: oversightLocalStorage,
    })

    //DATA DO DIA
    let date = new Date();
    let dateCurrent = date.toLocaleDateString('pt-BR');
    setDateCurrent(dateCurrent)
  }, [])

  const [data, setData] = useState({} as any);
  const [dateCurrent, setDateCurrent] = useState('');

  const displayButtons = () => {
    $('.report-buttons').addClass('display')
    $('.report-pictures-images').addClass('display')

    setTimeout(() => {
      $('.report-buttons').removeClass('display')
      $('.report-pictures-images').removeClass('display')

    }, 1000)
  }

  const imprimir = () => {
    displayButtons()
    window.print()
  }

  return (
    <div>
      <div className='report-area'>
        <div className='report-buttons'>
          <input
            type="button"
            value="IMPRIMIR RDO"
            onClick={() => { imprimir() }} />
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={logoPrefeitura} alt="Logomarca Prefeitura" width={'80px'} />
            &nbsp;
            &nbsp;
            <h3>Prefeitura Municipal de Aquidauana</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3>Relatório Fotográfico</h3>
          </div>
        </div>

        <div className='report-content'>
          <table>
            <tbody>
              <tr>
                <td><p><strong>Obra: </strong> {data.name}</p></td>
              </tr>
              <tr>
                <td><p><strong>Número Contrato: </strong> {data.number}</p></td>
                <td><p><strong>Processo Administrativo: </strong> {data.processAdm}</p></td>
              </tr>
              <tr>
                <td><p><strong>Medição: </strong> {data.measurement}</p></td>
                <td><p><strong>Empresa: </strong> {data.client}</p></td>
              </tr>
              <tr>
                <td><p><strong>Fiscalização: </strong> {data.oversight}</p></td>
                <td><p><strong>Data: </strong> {dateCurrent}</p></td>
              </tr>
              <tr>
                <td><p><strong>Local: </strong>{data.location}</p></td>
              </tr>
              <tr>
                <td>
                  <p><strong>Atividades/Observações:</strong></p>
                  <p>
                    {data.description}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='report-pictures'>
          <form>
            <input
              type="file"
              className="report-pictures-images"
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
            <span>___________________________</span>
            <p>Assinatura</p>
          </div>
          &nbsp;
          <div>
            <span>___________________________</span>
            <p>Assinatura</p>
          </div>
        </div>
      </div >
    </div>
  )
}