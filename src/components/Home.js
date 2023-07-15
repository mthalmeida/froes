import React from 'react'
import backgroundVideo from './itens/background.mp4'
import './Home.css'

export default class Home extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const parallaxScroll = window.scrollY
    const background = document.querySelector('.background-video')
    background.style.transform = `translateY(${parallaxScroll * 0.5}px)`
  }

  render () {
    return (
      <div className="video-container">
        <div className="content-container">
          <h1 className="video-text">Capturando momentos
            <br />
            através das lentes
          </h1>
        </div>
        <video src={backgroundVideo} controls={false} autoPlay loop className="background-video" />
      </div>
    )
  }
}
