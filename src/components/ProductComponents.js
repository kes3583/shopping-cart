import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponents = () => {
  const products = useSelector(state => state.products.data);
  console.log('product data :>> ', products);
  const renderList = products.map((item) => {    
    const {id, title, price, image, category } = item;
    return(
      <div className="four wide column" key={id}>     
        <Link to={`/cart/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  })

  return (
    <>{renderList}</>
  );
}

export { ProductComponents };