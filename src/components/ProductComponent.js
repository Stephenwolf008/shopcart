import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function ProductComponent(props) {
  const products = useSelector((state) => state.allProducts.product);
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="four wide column">
          <NavLink to={`/product/${product.id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={product.image}></img>
                </div>
                <div className="content">
                  <div className="header">{product.title}</div>
                  <div className="meta price">${product.price}</div>
                  <div className="meta">{product.category}</div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
}

export default ProductComponent;
