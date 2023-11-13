import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/actions/productActions";
function ProductListing(props) {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
