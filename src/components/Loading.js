import React from 'react'
import './Loading.css'
import centeredImage from './itens/logo_eraser.png'

export default class App extends React.Component {
  render () {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <div className="image-container">
          <img src={centeredImage} alt="Centered Image" className="centered-image" />
        </div>
      </div>
    )
  }
}
