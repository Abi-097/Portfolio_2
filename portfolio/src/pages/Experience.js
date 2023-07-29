import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
export default function Experience() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date="2008 - 2010"
        iconStyle={{backgroundColor:'#3e497a', color:'#fff'}}
        icon={<SchoolIcon/>}>
<h3 className='vertical-timeline-element-title'>S. Thomas College, Mt Lavinia</h3>
<p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 - 2012"
        iconStyle={{backgroundColor:'#3e497a', color:'#fff'}}
        icon={<SchoolIcon/>}>
<h3 className='vertical-timeline-element-title'>S. Thomas College, Mt Lavinia</h3>
<p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkRoundedIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>

    
    </div>
  )
}
