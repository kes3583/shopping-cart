import React from "react";
import {  useParams } from "react-router-dom";

function Cart() {  

  return (
    <div>
      Cart
    </div>
  );
}

function CartDetail() {  
 const { id } = useParams();

  return (
    <div>
      { id }
      CartDetail
    </div>
  );
}

export { Cart, CartDetail };
