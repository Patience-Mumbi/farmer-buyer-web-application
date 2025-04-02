import React, {  useState } from 'react'
import './Add.css'
import uploadArea  from '../../assets/upload_area.png';
import axios from "axios"
import { toast } from 'react-toastify';
const Add = ({url}) => {




    const [image,setImage] = useState(false);

    const [data,setData] =useState({
        name:"",
        price:"",
        category:"Cash Crops"
    })

    const onChangeHandler = (event)=>{
const name = event.target.name;
const value = event.target.value;
setData(data=>({...data,[name]:value})) 
    }

  const onsubmitHandler = async (event) =>{
event.preventDefault();


const formData = new FormData();
formData.append("name",data.name)
formData.append("price",Number(data.price))
formData.append("category",data.category)

formData.append("image",image)

const response = await axios.post(`${url}/api/crop/add`, formData);
if (response.data.success){
setData({
    name:"",
    price:"",
    category:"Cash Crops"
})
setImage(false)
toast.success(response.data.message)
}
else{
toast.error(response.data.message)
}

  }
   return (
    <div className='add'>
      <form className='flex-col' onSubmit={onsubmitHandler}>
<div className="add-image-upload flex-col">
    <p>Upload Image</p>
    <label htmlFor="image">
    <img src={image?URL.createObjectURL(image):uploadArea} alt="Upload Preview" />

    </label>
    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image"  hidden required />
</div>
<div className="add-product-name flex-col">
    <p>Product name</p>
    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
</div>
<div className="add-category-price">
    <div className="add-category flex-col">
        <p>Product Category</p>
        <select onChange={onChangeHandler}   name="category">
            <option value="Cash Crops">Cash Crops</option>
            <option value="Fruits">Fruits</option>
            <option value="Legumes">Legumes</option>
            <option value="Grains">Grains</option>
            <option value="Vegetables">Vegetables</option>
        </select>
    </div>
    <div className="add-price flex-col">
       <p>Products price</p> 
       <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>
    </div>
</div>
<button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
