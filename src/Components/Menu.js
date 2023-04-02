import React from "react";
import "./Menu.css";
import dog from "../Images/dog.png";
import cat from "../Images/cat.png";

const Menu = (props) => {
  
  return (
    <div className="menu">
      <ul className="menu-list">
        <li  onClick={()=>{
           props.changeTitle("DOG")
        }} >
          <img src={dog} width="25px" />
          <span className="menu-label">DOG</span>
        </li>
        <li onClick={()=>{
         props.changeTitle("CAT");
        }}>
          <img src={cat} width="25px" />
          <span className="menu-label">CAT</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
