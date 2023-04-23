import axios from "axios";
import React, { useEffect, useState } from "react";
import Breed from "./Breed";
import "./Animal.css";
const Animal = (props) => {
  const [breeds, setbreed] = useState([]);
  useEffect(() => {
    if (props.title.toLowerCase() === "dog") {
      axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
        const breadNames = Object.keys(response.data.message).slice(0, 5);
        setbreed(breadNames);
      });
    } else {
      axios
        .get("https://api.thecatapi.com/v1/breeds?limit=10&page=0")
        .then((response) => {
          console.log(response.data);
          const breadNames = response.data.map((cat) => cat.id);
          setbreed(breadNames);
        });
    }
  }, [props.title]);

  return (
    <div>
      <h3>{props.title}</h3>

      <Breed breeds={breeds} pet={props.title} />
    </div>
  );
};

export default Animal;
