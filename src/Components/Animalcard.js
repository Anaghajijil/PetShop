import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./Animalcard.css";

const Animalcard = (props) => {
  
  const [breedimages, setbreedimg] = useState([]);
  const [Cart, setCart] = useState([]);
  const addtocart = (value) => {
    const newCart=[...Cart,value]
    setCart(newCart);
    props.countTotal(Cart.length)
  };
  useEffect(() => {
    if (props.pet.toLowerCase() === "dog") {
      const url = "https://dog.ceo/api/breed/" + props.breed + "/images";
      axios.get(url).then((response) => {
        const img = response.data.message.slice(0, 8);
        setbreedimg(img);
      });
    } else {
      const url =
        "https://api.thecatapi.com/v1/images/search?breed_ids" + props.breed;
      axios.get(url).then((response) => {
        const img = response.data.map((image) => image.url).slice(0, 8);
        setbreedimg(img);
      });
    }
  }, [props.pet, props.breed]);
  return (
    <>
   
      <div className="container-fluid">
        <div className="row ">
          {breedimages.map((breedimg,index) => (
           
            <>
              <div className="col-3 "  key={index}>
                <img
                  src={breedimg}
                  width="275px"
                  height="200px"
                  className="imgcard"
                  alt="Animal" key={"img"+index}
                 
                ></img>
                <button 
                  onClick={()=>addtocart(breedimg)}
                  type="button"
                  className="btn btn-primary cart" key={"btn"+index}
                >
                  Add To Cart
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Animalcard;
