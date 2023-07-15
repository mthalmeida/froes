import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
export default class App extends React.Component {
  render () {
    return (
      <div>
        <div id="inicio"></div>
        <Home />
        <Header />
        <div id="sobre"></div>
        <About />
        <div id="projetos"></div>
        <Projects />
        <Footer />
      </div>
    )
  }
}
