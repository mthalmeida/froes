import React from 'react'
import './Footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="site-footer text-center">
        <div className="container">
          <div className="row">
            <div>
              <p className="copyright-text">
                Feito e atualizado constantemente usando HTML, CSS, JS, React,
                suor e muito ❤!
              </p>
            </div>

            <div>
              <div>
                <ul className="social-icons">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="instagram"
                      href="https://www.instagram.com/froesfotoevideo/"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="facebook"
                      href="https://www.facebook.com/eustaquio.froes"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="whatsapp"
                      href="http://bit.ly/Contato_FROES"
                    >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
