import React from 'react';
import './ExploreProducts.css';
import { plant_list } from '../../assets/assets';

const ExploreProducts = ({category,setCategory}) => {

  return (
    <div className='explore-products' id='explore-product'>
      <h1>Explore our Farm Products</h1>
      <p className='explore-product-text'>
        Choose From A diverse Farm featuring an array of products. Our mission is to establish transparency and satisfaction of our customers.
      </p>
      
      <div className="explore-product-list">
        {plant_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.plant_name?"All":item.plant_name)} key={index} className='explore-product-list-item'>  
              <img className={category===item.plant_name?"active":""} src={item.plant_image} alt="" />
              <p>{item.plant_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreProducts;
