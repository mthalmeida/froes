import React from 'react'
import './Header.css'

export default class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid max-height">
          <a
            href="https://mthalmeida.github.io/froes/"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/mthalmeida/froes/blob/main/public/images/logo_eraser.png?raw=true"
              alt="Logotipo da Froes"
              className="img-fluid"
            />
          </a>

          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#depoimentos">
                  Depoimentos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fotos">
                  Fotos e vídeos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
