import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const Shopcontext = createContext();

const ShopcontextProvider =(props)=>{

    const currency = '$'
    const delivery_fee = 10;
    const [search ,setSearch ] =useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItem,setCartItem] = useState({})
 
    const addToCart = async (itemId,size)=>{

        let cartData = structuredClone(cartItem)

        if (!size) {
            toast.error("please provide size")
            return;
            
        }
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] = 1
            }
            
        }else{
            cartData[itemId]={};
            cartData[itemId][size] = 1
        }
        setCartItem(cartData);
    }

    const getCartCount = ()=>{
         let totalCount = 0
         for(const items in cartItem){
            for(const item in cartItem[items]){
               try {
                if (cartItem[items][item] > 0) {
                    totalCount += cartItem[items][item]
                }
               } catch (error) {
                
               } 
            }

         }
         return totalCount;
    }

    const updateQuantity = (itemId, size, quantity)=>{
        let cartData = structuredClone(cartItem)

        cartData [itemId][size] = quantity;
        setCartItem(cartData)

    }

    

    const value ={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCart,
        cartItem,
        getCartCount,
        updateQuantity,
        
    }
    return(
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    )

}

export default  ShopcontextProvider