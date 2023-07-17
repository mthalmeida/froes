import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <form action="mailto:matheus.almeida.neves@gmail.com" method="post" encType="text/plain">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />
          <br />
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    )
  }
}
