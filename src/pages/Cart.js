import React from "react";
import {  useParams } from "react-router-dom";
import { Header } from '../components';
import { ProductList } from '../components';

function Cart() {  

  return (
    <div>
      <Header />
      Cart
      <ProductList />
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
