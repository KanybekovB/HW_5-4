// import { useEffect, useState } from 'react'
// import { getProduct } from '../main'
// import { useDispatch } from 'react-redux'

// import product from '/src/JSON/products.json'

// export const Product = ( ) => {
//     const dispatch = useDispatch()
//     const [products, setProducts] = useState([])
//     useEffect(() =>{
//         setProducts(product)
//     }, [])
//     const buyProduct = (product) => {
//         dispatch(
//             getProduct(product)
//         )
//         console.log(product)
//     }
    
//     // const handleBuyClick = (product) => {
//     //     // const selectedProduct = products.find((product) => product._id === productId);
//     //     console.log(product)

//     // }

//     return (
//         <>
//             <div className='productsBlock'>
//                 {products.map(product =>(
//                     <div className='product' key={product._id}>
//                         <img src={product.picture} alt={product.id} />
//                         <div className='productInfo'>
//                             <p className='productName'>{product.name}</p>
//                             <span>{product.price}</span>
//                             <button onClick={() => buyProduct(product)}>Buy</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// Product.jsx
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../main'; // Изменен путь к импорту

import product from '/src/JSON/products.json';

export const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(product);
  }, []);

  const buyProduct = (product) => {
    dispatch(
      getProduct(product)
    );
  };

  return (
    <>
      <div className='productsBlock'>
        {products.map(product => (
          <div className='product' key={product._id}>
            <img src={product.picture} alt={product.id} />
            <div className='productInfo'>
              <p className='productName'>{product.name}</p>
              <span>{product.price}</span>
              <button onClick={() => buyProduct(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
