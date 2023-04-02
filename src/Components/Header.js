import React from "react";
import Checkout from "./Checkout";
import "./Header.css";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="header container-fluid">
        <div className="row">
           <div className="col-6"> <h2 className="title">PETS SHOP</h2>
            </div> 
            <div className="col-4">
            <Search></Search>
            </div>
            <div className="col-2">
                <Checkout></Checkout>
            </div>
        </div>
       
      </div>
    </>
  );
};

export default Header;
