import React from 'react'

const Breed = (props) => {
  return (<>
    {
      props.breeds.map((breedName)=>
        <div>{breedName}</div>
      )
              }</>
  )
}

export default Breed