import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Animalcard.css";

const Animalcard = (props) => {
  const[breedimages,setbreedimg]=useState([]);
  useEffect(() =>{
    const url="https://dog.ceo/api/breed/"+props.breed+"/images"
axios.get(url).then((response)=>{

  const img=response.data.message.slice(0,8);
  setbreedimg(img)
  
});
  });
  return (
    <>
    <div className='container-fluid'>
    <div className='row '>
    {
breedimages.map((breedimg)=><>

<div className='col-3 '><img src={breedimg} width="275px" height="200px" className='imgcard'></img>
</div>



</>)
    }
</div>
</div>
    </>
  )
}

export default Animalcard