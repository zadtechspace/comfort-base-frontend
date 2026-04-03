import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Carts = () => {
  const [viewCartedItems, setViewCartedItems] = useState([])
  const [message, setMessage] = useState("")

 
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem("jwttoken")
 

  useEffect(() => {
   carteditemshandler()
  }, [])

  const carteditemshandler = async()=>{
    
    try {

      setIsLoading(true)
      const res = await fetch("http://localhost:4000/cart/getcart",{
        method:"GET",
        body:JSON.stringify(),
        headers:{
          "Content-Type":"application/json",
          authorization:`Bearer ${token}`
        }
        
      })
      const data = await res.json()
      
      setViewCartedItems(data.data)
      
      
      if(data.success === true){
        console.log(data)
      }
      if(data.success === false){
        setMessage(data.message)
        console.log(data.message)
        
      
      }
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  
    
  }

  const decreasecart = async(_id)=>{
    
    console.log(_id)
     
  
    try {
      const res = await fetch(`http://localhost:4000/cart/minusqty/${_id}`,{
        method:"PUT",  
        })
        
        const data =await res.json()
       
      if(data.success){
        console.log("Quantity decreased successfully")
      }

      carteditemshandler()
    } catch (error) {
      console.log(error)
    }
   

    
  }
  const increasecart = async(_id)=>{
    
    console.log(_id)
     
  
    try {
      const res = await fetch(`http://localhost:4000/cart/plusqty/${_id}`,{
        method:"PUT",  
        })
        
        const data =await res.json()
       
      if(data.success){
        console.log("Quantity increased successfully")
      }

      carteditemshandler()
    } catch (error) {
      console.log(error)
    }
    // finally{
    //   setincreaseQuanity("")
    // }

    
  }

  const removeItem = async (_id) => {
  await fetch(`http://localhost:4000/cart/removecart/${_id}`, {
    method: "DELETE"
  });

 carteditemshandler()
};

  if (viewCartedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-2xl font-bold text-gray-700">🛒 Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Add some products to see them here!</p>
        <img
          src="https://i.imgur.com/4NZ6uLY.png"
          alt="Empty Cart"
          className="w-64 mt-4"
        />
        <button
          className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          <Link to="/user/products">Continue Shopping</Link>
        </button>
      </div>
    )};
  





return (
  
<>

  <div className="max-w-3xl mx-auto p-4">
    
      <h2 className="text-2xl font-bold mb-4">🛒 My Cart</h2>

      {viewCartedItems.map((product) => (
        <div
          key={product._id}
          className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4"
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg"
          />

          {/* Info */}
          <div className="flex-1 sm:ml-4 text-center sm:text-left mt-3 sm:mt-0">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-500">₦{product.price}</p>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
              <button
                onClick={() => product.quantity > 1 && decreasecart(product._id)}
                className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                -
              </button>

              <span className="font-bold">{product.quantity}</span>

              <button
                onClick={() => increasecart(product._id)}
                className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Price + Remove */}
          <div className="text-center sm:text-right mt-3 sm:mt-0">
            <p className="font-semibold text-lg">₦{product.totalPrice}</p>

            <button
              onClick={() => removeItem(product._id)}
              className="text-red-500 text-sm mt-2 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

    {/* Total Section */}
      <div className="bg-gray-100 p-4 rounded-xl shadow mt-6">
        <h2 className="text-xl font-bold flex justify-between">
          <span>Total:</span>
          <span>
            ₦
            {viewCartedItems.reduce((acc, product) => acc + product.totalPrice, 0)}
          </span>
        </h2>

        <button className="w-full mt-4 bg-blue-950 text-white py-3 rounded-xl hover:bg-gray-800">
         <Link to="/user/checkout">Proceed to Checkout</Link>
        </button>
      </div>
  </div>
</>

  )
}

export default Carts