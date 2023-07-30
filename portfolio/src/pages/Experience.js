import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { ExperienceList } from '../helpers/ExperienceList';
export default function Experience() {
  return (
    <div className='experience'>
   
      <VerticalTimeline lineColor='#3e497a'>
      {ExperienceList.map((item) => (
        <VerticalTimelineElement className='vertical-timeline-element--education' date= <b> {item.year}</b>
        iconStyle={{backgroundColor:item.bgColor, color:'#fff'}}
        icon={item.logo}>
<h3 className='vertical-timeline-element-title'>{item.education}</h3>
<p style={{fontWeight:'bold', color:"#6c757d"}}> {item.name}</p>
<p style={{fontSize:'14px', color:"#013a63"}}> {item.learnings}</p>
        </VerticalTimelineElement>
        ))}
        </VerticalTimeline>   
    </div>
  )
}
