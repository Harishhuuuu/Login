import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Maybeshownavbar = ({ Children }) => {
    const location = useLocation();
    
    const [showNavbar,setshowNavbar]=useState(false);

    useEffect(()=>{

        if(location.pathname ==="/Home"){
            setshowNavbar(true);
        }
        else{
            setshowNavbar(false);
        }
    },[location])
  return (
    <div>{showNavbar && Children}</div>
  )
}

export default Maybeshownavbar