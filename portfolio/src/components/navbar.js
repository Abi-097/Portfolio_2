import React, { useEffect, useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Navbar() {
const [expandNavbar, setExpandNavbar] = useState(false);

const location = useLocation(); //used here to when the navbar icon open and choose a page and need to close that page

// this to close the navbar after click on-> icon -> onclick a page-> then closes
useEffect(()=>{
  setExpandNavbar(false)
},[location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close" }>
<div className='toggleButton'>
<button onClick={()=>{setExpandNavbar((prev) => !prev)}}> <ReorderIcon/> </button>
</div>
<div className='links'>
<Link to='/'> Home </Link>
<Link to='/projects'> Projects </Link>
<Link to='/experience'> Experience </Link>
</div>
    </div>
  )
}
