import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import CropItem_temp from '../CropItem_temp/CropItem_temp';

const FoodDisplay = ({ category }) => { 
    const { crop_list } = useContext(StoreContext); 

    return (
        <div className='crop-display' id='crop-display'>
            <h2>Top plants near here</h2>
            <div className="crop-display-list">
                {crop_list.map((item,index)=>{
                    {console.log(category,item.category);}
                    if (category==="All" || category===item.category){
                        return <CropItem_temp key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    }

                }
                )}

            </div>
        </div>
    );
}

export default FoodDisplay;
