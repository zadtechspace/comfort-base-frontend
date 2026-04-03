import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'






const ProductList = () => {

  const  [isLoading, setIsloading]= useState(false)

  const [products, setProducts] = useState([])

  const fetchProduct = async()=>{
     
  setIsloading(true)

  try {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()

      setProducts(data)

      console.log(data)

  } catch (error) {
    console.log(error)
  }finally{
     setIsloading (false)
  }
}

const addtocart = async(products)=>{
    const token = localStorage.getItem("jwttoken")
    // console.log(token);
    
     const cartItem ={
      name:products.title,
      productprice:products.price,
      image:products.images[0],
      quantity: 1,
      
     }
    //  console.log(cartItem)

     try {
        const res = await fetch("https://comfort-base-backend.onrender.com/cart/addcart",{
          method:"POST",
          body:JSON.stringify(cartItem),
          headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${token}`
          }
        })

        const data = await res.json()

        if(data.success){
          console.log(data),
          alert("Item addedd successfully")
        }
        // else{
        //   alert("something went wrong")
        // }
     } catch (error) {
      console.log(error)
     }
}

useEffect(() => {
  
 fetchProduct()
  return () => {
   
  }
}, [])

  return (
    <div className='grid grid-cols-3 gap-12 py-8 px-6 w-full bg-gray-500 text-gray-600'>
          {
            products.map((product)=>(
              <div key={product.id} className='flex flex-col bg-white gap-6 items-center justify-between rounded-4xl shadow-2xl text-sm py-6  '>

                <div className='w-full place-items-center p-6 h-full'>
                  <img src={product.images[0]}  alt="" className=' h-full w-48'/>
                </div>


                <div className='w-full grid gap-2 p-4 h-full'>

                    <p><b>Title:</b> {product.title}</p>
                    <p><b>Category:</b> {product.category}</p>
                    {/* <p><b>Description: </b>{product.description}</p> */}
                    <p><b>Price: #</b>{product.price}</p>                 
  
                </div>

                <div className='flex gap-2 items-center'>
                    <Link className='bg-green-800 text-white py-2 px-8 rounded-3xl'  to={`/products/${product.id}`}>View Product</Link>
                    <button className='bg-blue-800 text-white py-2 px-8 rounded-3xl' onClick={()=>addtocart(product)}>Add to cart</button>
                </div>

                    
              </div>
            ))
          }
    </div>
  )
}

export default ProductList