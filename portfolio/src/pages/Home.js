import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../styles/Home.css"
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <div className='home'> 
    <div className='about'>
    <h2>Hey, My name is Abishek Mahenderaraja</h2>
    <div className='prompt'>
      <p> Software Developer </p>  
      <SocialLinks/>
      {/* <GitHubIcon/> <LinkedInIcon/> <EmailIcon/> <WhatsAppIcon/> */}
    </div>
    </div>
    <div className='skills'>
    <h1>Skills</h1>
    <ol className='list'>
<li className='item'>
    <h2> Front-End </h2>
    <span> ReactJS, Redux, HTML, CSS, JavaScript, NPM, Bootstrap, TailwindCSS, MaterialUI </span>
</li>
<li className='item'> 
<h2> Back-End </h2>
    <span>NodeJS, ExpressJS, MongoDB</span>
</li>
<li className='item'> 
<h2> Languages </h2>
    <span>JavaScript, Python, PHP</span>
</li>
    </ol>
</div>
    </div>
  )
}
