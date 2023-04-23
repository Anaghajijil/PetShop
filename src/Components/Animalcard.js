import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Animalcard.css";

const Animalcard = (props) => {
  const [breedimages, setbreedimg] = useState([]);
  useEffect(() => {
    if(props.pet.toLowerCase()==="dog"){
      const url = "https://dog.ceo/api/breed/" + props.breed + "/images";
      axios.get(url).then((response) => {
        const img = response.data.message.slice(0, 8);
        setbreedimg(img);
      });
    }else{
      const url = "https://api.thecatapi.com/v1/images/search?breed_ids"+props.breed;
      axios.get(url).then((response) => {
        const img = response.data.map(image=>image.url).slice(0, 8);
        setbreedimg(img);
    });
  }

 
  },[props.pet,props.breed]);
  return (
    <>
   
      <div className="container-fluid">
        <div className="row ">
          {breedimages.map((breedimg) => (
            <>
              <div className="col-3 ">
                <img
                  src={breedimg}
                  width="275px"
                  height="200px"
                  className="imgcard" alt="Animal"
                ></img>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Animalcard;
