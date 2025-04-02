import { createContext, useEffect, useState } from "react";
import axios from  "axios"
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [crop_list,setCropList] = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) { 
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      await axios.post (url+"/api/cart/remove", {itemId},{headers:{token}});

  }
  
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = crop_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
          }
        }
        return totalAmount;
      };
      const fetchCropList = async () => {
        try {
            const response = await axios.get(url + "/api/crop/list");
            console.log("API Response:", response.data);  
            setCropList(response.data.data);
        } catch (error) {
            console.error("Error fetching crop list:", error);
        }
    };
    const loadCartData = async (token) =>{
      const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
      setCartItems(response.data.cartData);
    }
  
    
      useEffect(() => {
        
async function loadData(){
    await fetchCropList()
    if (localStorage.getItem("token")){
        setToken (localStorage.getItem("token"));

        await loadCartData(localStorage.getItem("token"));
    }
}
loadData();
      }, []);
    
      const contextValue = {
        crop_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;