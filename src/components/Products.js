import React, { useEffect, useState } from "react";
import "../../src/index.css";
import { add } from "../store/CartSlice";
import { useDispatch ,useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice"; 
import { STATUSES } from "../store/productsSlice";
const Products = () => {
  const {data: product,status} = useSelector((state) => state.product)
  const dispatch = useDispatch();
  // const [product, setproduct] = useState([]);

  useEffect(() => {
     dispatch(fetchProducts())


    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setproduct(data);
    // };
    // fetchProduct();
  }, []);

  const handleAdd = (product) => {
    // product -> to store in redux store
    // payload is nothing but the data
    dispatch(add(product));
  };

  if(status === STATUSES.LOADING){
 return <h2> Loading </h2>
  }
  if(status === STATUSES.ERROR){
    return <h2> Something went to wrong </h2>
  }

  return (
    <div className="productsWrapper">
      {product.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
