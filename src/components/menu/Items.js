import React, { useState } from 'react'
import {NumericInput} from './NumericInput'
import Swal from 'sweetalert2'

function Items({product}) {

  const [qty,setQty] = useState(1);

  const add=()=>{
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    const index = cart.findIndex((p)=>p._id===product._id)
    if(index===-1) {
      cart.push({qty,...product})
    } else {
      cart[index].qty=qty
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    Swal.fire({ 
      icon: 'success',
      title: 'Excelente',
      text: 'El producto se agrego con éxito a tu carrito',
    })
    
  }

  return (
    <div className='item'>
        <h3 class="product-name ">{product.name}</h3>
        <img src= {product.image} alt="product"/>        
        <p class="description">{product.description}</p>        
        <p class="price">$ {product.price}</p>
        <div class="add-cart">
          <NumericInput onChange={(qty)=>setQty(qty)}></NumericInput>
          <button class="add" onClick={add}>Agregar</button>
        </div>
    </div>
  )
}

export default Items



