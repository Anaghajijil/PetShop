import React from "react";
import "./Checkout.css"
import * as Icon from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';

const Checkout = () => {
  return (
    <div className="row">
      <div className="col-1"><Icon.Cart4 size={30}  className="cart" /></div>
<div className="col-1">
<Badge bg="danger">0</Badge>
</div>
      <div className="col-9">
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
