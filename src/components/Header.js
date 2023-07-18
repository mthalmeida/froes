import React from 'react'
import './Header.css'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.menuRef = React.createRef()
  }

  handleClickOutside = (event) => {
    if (this.menuRef && !this.menuRef.current.contains(event.target)) {
      this.hideMenu()
    }
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  hideMenu () {
    const navbarCollapse = document.getElementById('navbarCollapse')
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show')
    }
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid max-height">
          <a
            href="https://mthalmeida.github.io/froes/"
            rel="noopener noreferrer"
            className="navbar-brand"
          >
            <img
              src="https://github.com/mthalmeida/froes/blob/main/public/images/logo_eraser.png?raw=true"
              alt="Logotipo da Froes"
              className="img-fluid"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse" ref={this.menuRef}>
            <ul className="navbar-nav ms-auto">
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
