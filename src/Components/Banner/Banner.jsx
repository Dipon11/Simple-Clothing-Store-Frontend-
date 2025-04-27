import React from 'react';
import image from '../../assets/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise.jpg';

const Banner = () => {
  return (
    <div
      className='bg-cover bg-center h-[600px] flex items-center'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='max-w-6xl mx-auto w-full text-white px-4 '>
        <div className='text-center bg-amber-200 p-10 rounded-4xl '>
          <h1
            className='text-6xl font-bold mb-5 leading-tight drop-shadow-lg' // Tailwind drop-shadow for black shadow
          >
            Elevate Your Style<br />With Our New Clothing Collection
          </h1>
          <p
            className="text-lg mb-8 drop-shadow-md" // Adding shadow to text
          >
            Discover the latest trends in fashion, curated just for you.
          </p>
          <div className='flex justify-center gap-3'>
            <input
              className='bg-white p-4 w-[60%] rounded-full text-gray-700'
              type="text"
              placeholder='Search for clothing, accessories...'
            />
            <input
              className='font-medium bg-amber-950 text-white rounded-full p-4 px-8 text-lg cursor-pointer hover:bg-gray-800 transition'
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
