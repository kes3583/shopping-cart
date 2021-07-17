import React from "react";
import { useParams } from "react-router-dom";
import { useSelectedDataApi } from "../utils/useDataApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const productItemUrl = `https://fakestoreapi.com/products/${productId}`;
  const [{ data, isLoading, isError }] = useSelectedDataApi(
    productItemUrl,
    {}
  );
  console.log("productItem 1 :>> ", data);
  const {id, title, price, image, category, description } = data; 

  return (
    <>
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (
      <div>Loading ...</div>
      ) : (
      <div className="ui grid container">        
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export { ProductDetails };
