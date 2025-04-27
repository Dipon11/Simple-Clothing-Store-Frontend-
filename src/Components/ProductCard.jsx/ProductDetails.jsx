import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();  // Get the product ID from the URL
  console.log({ id }); // Log the product ID

  const navigate = useNavigate(); // Hook to navigate
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
    
        const products = data.data.data; 

        console.log('Products:', products);  

        
        const selectedProduct = products.find((prod) => prod.id === parseInt(id));  
        console.log('Selected Product:', selectedProduct); 
        setProduct(selectedProduct);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!product) return <div>Product not found.</div>;

  const { name, short_desc, description, price, discount_amount, discount_date, image, stock } = product;
  const finalPrice = parseInt(price) - parseInt(discount_amount);

  return (
    <div className="product-details-container p-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row shadow-lg rounded-xl bg-white">
   

        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={`https://admin.refabry.com/storage/product/${image}`}
            alt={name}
            className="h-96 w-full object-cover rounded-xl"
          />
        </div>

        <div className="p-6 lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{name}</h1>
          <p className="text-lg text-gray-600">{short_desc}</p> 
          <p className="text-lg text-gray-600">{description}</p> 

     
          <div className="mb-4">
            <p className="text-2xl text-gray-800">
              <span className="text-red-500 line-through">₹{price}</span> ₹{finalPrice}
            </p>
            <p className="text-sm text-gray-500">Discount available until: {discount_date}</p> {/* Discount Date */}
          </div>

      
          <div className="mb-4">
            <p className="text-lg text-gray-600">Stock: {stock > 0 ? stock : 'Out of stock'}</p> {/* Stock */}
          </div>

    
          <div className="flex justify-between">
            <button
              onClick={() => alert('Added to Cart!')}  // Add actual functionality here
              className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Add to Cart
            </button>
              
        <button 
          onClick={() => navigate(-1)}  
          className="mb-4 px-4 py-2 bg-red-600 hover:bg-gray-400 text-white rounded-lg transition duration-200"
        >
          Go Back
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
