import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectsList } from '../helpers/ProjectsList'
import "../styles/Projects.css"
export default function Projects() {
  return (
    <div className='projects'>
    <h1>My Personal Projects</h1>
    <div className='projectList'>
      {ProjectsList.map((project, index)=>(
        <ProjectItem id={index} name={project.name} image={project.image}/>
      ))}
    </div>
     
    </div>
  )
}
