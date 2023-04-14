import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Breed from './Breed'

const Animal = (props) => {
  const[breeds,setbreed]=useState([])
 useEffect(() =>{
  axios.get("https://dog.ceo/api/breeds/list/all").then((response)=>{
    const breadNames=Object.keys(response.data.message).slice(0,10);
setbreed(breadNames)
  },[]);
  
 });
  return (
    <div>
        <h3>{props.title}</h3>
 
        <Breed breeds={breeds}/>
   
    </div>
  )
}

export default Animal