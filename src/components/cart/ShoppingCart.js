import React, { useEffect, useState }  from 'react';
import { Link } from "react-router-dom";
import PaypalBtn from '../Paypal/PaypalButton';


function ShoppingCart() {
    const [cart, setCart ] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);     
    
    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        setCart(cart)
    },
    []
    )

    useEffect(() => {        
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);
    
    function deleteItem(id) {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const cartUpdated = cart.filter(product => product._id !== id);
        setCart(cartUpdated);
        localStorage.setItem('cart', JSON.stringify(cartUpdated))
    }    
    
    const totalCart=()=>{
        let total = 0;
        cart.forEach(product => {
            total += product.price*product.qty;
        });
        return total;
    }
    
    return(    
        <div className='summary'>            
            <div className='shopping-cart'>        
                {cart.map(product=>(
                    <div className='item-cart' key={product._id}>            
                    <h3 class="product-name ">{product.name}</h3>                              
                    <p>Cantidad: {product.qty}</p>
                    <p>Precio: {product.qty*product.price}</p>
                    <button class="add" onClick={() => deleteItem(product._id)}>Eliminar</button>            
                    </div>
                ))}
            </div> 
            <p className='grand-total'>El total de tu pedido es de ${totalCart()}</p>  
            <div className='summary-btn'>                                         
                <Link to="/menu">
                    <button className='order-btn'>Menú</button>
                </Link>    
                
                { isLoggedIn ? 
                    <PaypalBtn value={totalCart()} /> 
                    : 
                    <Link to="/ingresar"><p>Incia sesión para hacer tu pedido</p></Link> 
                }             
                
            </div>
        </div>
    )
}
        
export {ShoppingCart}