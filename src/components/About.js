import React from 'react'
import aboutData from '../data/AboutData'
import './About.scss'

export default class About extends React.Component {
  render () {
    return (
      <div className="about">
        {aboutData.map((aboutinfo) => {
          const { image, title, subTitle, text } = aboutinfo
          return (
            <div className="cardContainer" key={title}>
              <div className="datesProfile">
                <div className="imgProfile">
                  <img src={image} className="objetFit" alt="" />
                  <div>
                    <span
                      className="iconify verificUser"
                      data-icon="heroicons-solid:badge-check"
                      data-inline="false"
                    ></span>
                  </div>
                </div>

                <div className="datesUser">
                  <h1>{title}</h1>
                  <p>{subTitle}</p>
                </div>

                <div id="socialMedia" className="col-md-4 col-sm-6 col-xs-12">
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
              <div className="moreDetailsUser">
                <p>{text}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
