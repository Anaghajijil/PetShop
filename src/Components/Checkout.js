import React, { useContext } from "react";
import "./Checkout.css"
import * as Icon from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import { Cartcontext } from "../Context/Cartcontext";

const Checkout = () => {
  const {cartCount,setCartCount}=useContext(Cartcontext);
  return (
    <div className="row">
      <div className="col-1"><Icon.Cart4 size={30}  className="cart" /></div>
<div className="col-2">
<Badge bg="danger">{cartCount}</Badge>
</div>
      <div className="col-8">
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
