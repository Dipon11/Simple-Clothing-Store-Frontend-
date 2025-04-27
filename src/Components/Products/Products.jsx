import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard.jsx/ProductCard';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://admin.refabry.com/api/all/product/get')
      .then(response => {
        setProducts(response.data.data.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
         <ProductCard key={product.id} product={product} ></ProductCard>
         
        ))}
      </div>
    </div>
  );
};

export default Products;
