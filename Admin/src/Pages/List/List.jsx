import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast } from 'react-toastify'


const List = ({url}) => {






  const [list,setList] = useState([]);

  const fetchList = async () => {


    
    const response = await axios.get(`${url}/api/crop/list`);


    if (response.data.success){
      setList(response.data.data);
    }
else
{
  toast.error("Error")
}
  }


  const removeCrop= async(plantId)=>
    {
      const response = await axios.post(`${url}/api/crop/remove`, { id: plantId });
await fetchList();
if (response.data.success){
  toast.success(response.data.message)
}
else{
  toast.error("Error")
}
  }

  useEffect(()=>{
fetchList();
  },[])

 
  return (
    <div className='list add flex-col'>
      <p>ALL PLANTS LIST</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
  return (
    <div key={index} className="list-table-format">
      <img src={`${url}/images/${item.image}`} alt="" />
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>${item.price}</p>
      <p onClick={()=>removeCrop(item._id)} className='cursor'>X</p>
    </div>
  );
})}

      </div>
      
    </div>
  )
}

export default List
