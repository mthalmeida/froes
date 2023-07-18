import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import BtnContato from './components/BtnContato'
import Loading from './components/Loading'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500)
  }

  componentWillUnmount () {
    window.removeEventListener('load', () => {
      this.setState({ isLoading: false })
    })
  }

  render () {
    const { isLoading } = this.state

    if (isLoading) {
      return <Loading />
    }

    return (
      <div>
        <div id="inicio"></div>
        <Home />
        <Header />
        <div id="sobre"></div>
        <About />
        <div id="depoimentos"></div>
        <Projects />
        <div id="fotos"></div>
        <Instagram />
        <Footer />
        <BtnContato />
      </div>
    )
  }
}
