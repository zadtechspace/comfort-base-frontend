import React, { useEffect, useState } from 'react'

const Carts = () => {
  const [viewCartedItems, setViewCartedItems] = useState([])

  const [increaseQuanity, setincreaseQuanity] = useState("")
  const token = localStorage.getItem("jwttoken")
  // console.log(token)


  useEffect(() => {
   carteditemshandler()
  }, [])
  const carteditemshandler = async(getCartedItems)=>{

        try {
          const res = await fetch("http://localhost:4000/cart/getcart",{
            method:"GET",
            body:JSON.stringify(getCartedItems),
            headers:{
              "Content-Type":"application/json",
              authorization:`Bearer ${token}`
            }

          })
          const data = await res.json()
          
          setViewCartedItems(data.data)


          if(data.success){
            console.log(data)
          }
        } catch (error) {
          console.log(error)
        }
        // setCartedItems("Hello world")
      // console.log("hello world")
        

  }

  const increasecart = async(itemId)=>{
    
      setincreaseQuanity(itemId)


    try {
      const res = await fetch(`http://localhost:4000/cart/incrementCartItemQuantity/${itemId}`,{
        method:"POST",
        body:JSON.stringify(),
        headers:{
          "Content-Type":"application/json",
          authorization:`Bearer ${token}`}
        })
        
        const data =await res.json()
       
      if(data.success){
        console.log("Quantity increased successfully")
      }
    } catch (error) {
      console.log(error)
    }
    finally{
      setincreaseQuanity("")
    }

    
  }
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div style={{width:"100%"}}>
      <h1>CARTED ITEMS</h1>
       {
          viewCartedItems.map((item,key)=>(
            <div key={key} className='flex gap-5 items-center'>
              <div style={{width:"5%"}}>
                <img src={item.image} alt="" />
              </div>

              <div>
                <p><b>Name:</b> {item.name}</p>
                <p><b>Quantity:</b> {increaseQuanity===item._id? "C": item.quantity}</p>
                <p><b>Amount:</b> <b>#</b>{item.amount}</p>
              </div>
              <div style={{display:"grid",gap:"2px"}}>
                <button className='p-2 bg-green-600 text-white rounded-full' onClick={()=>increasecart(item.id)}>+</button>

                <button className='p-2 bg-red-600 text-white rounded-full'>-</button>
               
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Carts