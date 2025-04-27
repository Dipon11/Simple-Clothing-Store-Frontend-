import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import

const ProductCard = ({ product }) => {
  console.log(product)
  const discount = product.discount_amount;
  
  const intDiscount =parseInt(discount);
  const finalPrice=(parseInt(product.price)-intDiscount)




  return (
    <div className="bg-white w-full rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col items-center">
      <figure className="w-full flex justify-center mb-4">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="h-56 w-full object-cover rounded-xl"
        />
      </figure>
      <div className="text-center flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-500 text-sm mb-4">{product.short_desc?.slice(0, 60)}...</p>
        <div className="mb-4">
        <p className='text-gray-800'><span className='text-red-500 line-through'>${product.price}</span> ${finalPrice}</p>
          
        </div>
        <div className="w-full">
          <Link 
            to={`/product/${product.id}`} 
            className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
