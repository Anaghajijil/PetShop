import React from "react";
import Animalcard from "./Animalcard";
import "./Breed.css";

const Breed = (props) => {
  return (
    <>
    <div className='breedlist'>
    
      {props.breeds.map((breedName) => (<>
      
        <div className="breeds">{breedName}</div>
       <Animalcard breed={breedName} pet={props.pet}/>
      
        </>

      ))}
      </div>
    </>
  );
};

export default Breed;
