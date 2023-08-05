import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsList } from '../helpers/ProjectsList';
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css"
import { Button } from '@mui/material';
import { Deploy } from '../components/Images';
export default function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectsList[id]

    function handleButtonClick() {
      window.location.href = project.url;
    }

    function handleGitClick() {
      window.location.href = project.git;
    }
  return (
    <div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image}/>
    <div className='image_button'>
    <GitHubIcon onClick={handleGitClick} id="projectDisplay-git"/>&nbsp;&nbsp;<Button variant="contained" color="info" onClick={handleButtonClick}> <img src={Deploy} className='button_image'/> &nbsp; Deploy</Button>
    </div>
    <p>
    <b>Skills:</b> {project.skills}
    </p>
   
    </div>
  )
}
