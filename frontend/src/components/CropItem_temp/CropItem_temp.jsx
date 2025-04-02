import React, { useContext} from 'react'
import './CropItem_temp.css'
import rating_stars from '../../assets/rating_stars.png';
import add_icon_white from '../../assets/add_icon_white.png';
import remove_icon_red from '../../assets/remove_icon_red.png';
import add_icon_green from '../../assets/add_icon_green.png';
import { StoreContext } from '../../Context/StoreContext';


const CropItem_temp = ({ id, name, price, image }) => {

  

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div className='crop-item'>
      <div className='crop-item-img-container'>
        <img className='crop-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[id] 
          ?<img className='add' onClick={() =>addToCart(id)} src={add_icon_white} alt="" />
        
          :<div className='crop-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={add_icon_green} alt="" />
          </div>  
        }
      </div>
      <div className="crop-item-info">
        <div className="crop-item-name-rating">
          <p>{name}</p>
          <img src={rating_stars} alt="" />
        </div>
        <p className="crop-item-price">${price}</p>
      </div>
    </div>
  );
}

export default CropItem_temp;
