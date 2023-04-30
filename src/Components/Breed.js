import React, { useContext, useState } from "react";
import Animalcard from "./Animalcard";
import "./Breed.css";
import { Cartcontext } from "../Context/Cartcontext";

const Breed = (props) => {
  const {cartCount,setCartCount}=useContext(Cartcontext);
  const [totalCart,setTotalCart]=useState(0);
  const countTotal=(total)=>{
    var newTotal=totalCart+1;
    setTotalCart(newTotal);
    setCartCount(newTotal);
  }
  return (
    <>
    <div className='breedlist'>
    
      {props.breeds.map((breedName,index) => (<>
      
        <div className="breeds" Key={index}>{breedName}</div>
       <Animalcard breed={breedName} pet={props.pet} Key={"Animalcard"+index} countTotal={countTotal}/>
      
        </>

      ))}
      </div>
    </>
  );
};

export default Breed;
