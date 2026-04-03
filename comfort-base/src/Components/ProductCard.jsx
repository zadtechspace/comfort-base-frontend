import React, { useState } from 'react';
import { toast } from 'sonner';

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const addtocart = async(product)=>{
    const token = localStorage.getItem("jwttoken")
    // console.log(token);
    
     const cartItem ={
      name:product.title,
      productprice:product.price,
      image:product.images[0],
      quantity: product.quantity || 1,
      productId: product.id,
      
     }
    //  console.log(cartItem)

     try {
        const res = await fetch("http://localhost:4000/cart/addcart",{
          method:"POST",
          body:JSON.stringify(cartItem),
          headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${token}`
          }
        })

        const data = await res.json()

        if(data.success){
          console.log(data)
          toast.success("Item added to cart successfully")
        }
        // else{
        //   alert("something went wrong")
        // }
     } catch (error) {
      console.log(error)
     }
}


  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition h-full flex flex-col">
      {/* Main Image */}
      <img
        src={product.images[currentImageIndex]}
        alt={product.title}
        className="object-cover rounded h-64 w-full"
      />
      
      {/* Image Thumbnails */}
      <div className="flex justify-center gap-2 mt-2">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.title} ${index + 1}`}
            className={`w-12 h-12 object-cover rounded cursor-pointer border-2 ${
              index === currentImageIndex ? 'border-amber-500' : 'border-gray-300'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      
      <h2 className="font-semibold text-base mt-2">
        {product.title}
      </h2>
      <p className="text-gray-500 mt-1">₦{product.price}</p>
      <button className="border border-gray-300 text-gray-700 w-full mt-2 py-2 rounded hover:bg-gray-100 transition">
        View Product
      </button>
      <button className="bg-black text-white w-full mt-2 py-2 rounded hover:bg-gray-800 transition" onClick={() => addtocart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;