import React from 'react'
import projectData from '../data/projectsData'
import './Projects.css'

export default class Projects extends React.Component {
  render () {
    return (
      <div className="projects">

      <h1 className="text-projects text-center display-6">DEPOIMENTOS</h1>

        <div className="main">
          <ul className="cards">
            {projectData.map((projectInfo) => {
              const { name, description, image } = projectInfo
              return (
                <li key={name} className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img alt="image-perfil" src={image} />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{name}</h2>
                      <p className="card_text">{description}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
