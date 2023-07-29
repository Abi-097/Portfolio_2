import React from 'react'

export default function ProjectItem({image, name}) {
  return (
    <div className='projectItem'>
    <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
     <h1> {name} </h1>
    </div>
   
  )
}
