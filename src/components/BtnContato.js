import React from 'react'
import './BtnContato.css'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <a className="fixed-button" href="https://wa.me/5537999189055?text=Ol%C3%A1%21+Achei+o+seu+site+e+gostaria+de+ter+mais+informa%C3%A7%C3%B5es.">
          <img src="https://github.com/mthalmeida/froes/blob/main/src/components/itens/contato-whatsapp.png?raw=true" alt="contatoForm" />
        </a>
      </div>
    )
  }
}
