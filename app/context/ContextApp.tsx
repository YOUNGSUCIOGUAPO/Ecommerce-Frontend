"use client";

import { useContext, createContext, useState, ReactNode, useEffect } from "react";

// Define the type for the product items
interface Product {
  id: number,
  image_url: string;
  title: string;
  price: number;
  average_rating: number,
  rating_count: number,
  quantity:number,
}

interface CartContextType {
  addToCartHandler: (id: number) => void;
  cart: Product[];
  products: Product[];
   removeItemHandler : (id:number) => void,
   increaseQuantityHandler : (id:number) =>void,
   decreaseQuantityHandler: (id:number) =>void,
   totalQuantity: number | null, 
   getCartProducts : ()=>void
}


interface CartProviderProps {
  children: ReactNode;
}

// Create a context with a default value of `null` (correcting the type to be either CartContextType or null)
const CartContext = createContext<CartContextType | null>(null);

// Create a CartProvider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cart_id = "dec1fa8c-aad3-42e5-af47-8f1647ee10ae"
  const [totalQuantity, setTotalQuantity] = useState<number|null>(null)
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const getProductQty = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/${cart_id}`,
      {
        headers: {"ngrok-skip-browser-warning": "65320"}
      }
    )

    const productqty = await res.json()
    setTotalQuantity(productqty.data.items_number)
  }

  useEffect(()=>{
      getProductQty()
  },[])

  // Fetch products from the API
  const getAllProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product?limit=12`, {
      headers: {"ngrok-skip-browser-warning": "65320"}
    });
    const products = await res.json();
    setProducts(products.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);


  //Fetch Products by cart
  const getCartProducts = async () =>{
      const res = await fetch( `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/${cart_id}/products`,
        {
          headers: {"ngrok-skip-browser-warning": "65320"}
        }
      )
      const products = await res.json()
      setCart(products.data)
  }

  // Handler to add product to cart
  const addToCartHandler = async (id: number) => {
   try{
    const product = products.find((product) => product.id === id);
    if (product) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/${cart_id}/product`,{
        method:"POST",
        headers:{"Content-Type":"application/json","ngrok-skip-browser-warning": "65320" },
        body:JSON.stringify({
          product_id:product.id,
          quantity: 1
        })
    }
    )
    if(!response.ok){
      throw new Error('Failed to add product to cart')
    }
     getProductQty()
  };

   } catch(error){
    console.error("Error add product to cart")
   }
  }

    const removeItemHandler = async(id:number) =>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/${cart_id}/cart-item/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json","ngrok-skip-browser-warning": "65320"},
          })
          if(response.ok){
             setCart((prevItem) => prevItem.filter((product)=>product.id !== id))
                 getCartProducts()
                getProductQty()
            }
          else{
              console.error("Error add product to cart")
           }
   }



    const increaseQuantityHandler = async (id:number) =>{
      try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/products/${id}/quantity`,
        {
          method:"PATCH",
          headers:{"Content-Type":"application/json","ngrok-skip-browser-warning": "65320"},
          body:JSON.stringify({
            action:"increase"
          })
        }
      )
      if(!response.ok){
        throw new Error('Failed to update quantity')
      }
        setCart((prevItem)=> prevItem.map((item)=> item.id === id ? {...item, quantity:item.quantity + 1 } : item))
        getCartProducts()
        getProductQty()
    }
    catch (error){
        console.error("Error increasing product quantity")
    }
  }


    const decreaseQuantityHandler = async (id:number) =>{
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/products/${id}/quantity`,
          {
            method:"PATCH",
            headers:{"Content-Type":"application/json","ngrok-skip-browser-warning": "65320"},
            body:JSON.stringify({
              action:"decrease"
            })
          }
        )
        if(!response.ok){
          throw new Error('Failed to update quantity')
        }

        setCart((prevItem)=>prevItem.map((item) => item.id === id && item.quantity >0 ? {...item, quantity:item.quantity -1 }: item))
        getCartProducts()
        getProductQty()
      }
        catch (error){
          console.error("Error decreasing product quantity")
      }
    }  

  return (
    <CartContext.Provider value={{ cart, addToCartHandler, products, removeItemHandler, increaseQuantityHandler, decreaseQuantityHandler, totalQuantity, getCartProducts}}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useCustomContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCustomContext must be used within a CartProvider");
  }
  return context;
};
