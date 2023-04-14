import React from 'react'
import dogimg from "../Images/dog.jpg";

const Animalcard = () => {
  return (
    <>
<div className='row'>
<div className='col-4'><img src={dogimg} width="200px" height="150px"></img>
</div>

</div>
<div className='row'>
    <div className='col-4'>Name:Golden Retriver</div>
</div>
    </>
  )
}

export default Animalcard