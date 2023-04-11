import React from 'react';
import { useEffect, useState } from 'react';
import Items from './Items';

function RenderMenu({category}){

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch (`${process.env.REACT_APP_BACKEND_URL}/products/get?category=${category}`)
            .then (data => data.json())
            .then (products =>{
                setProducts(products.products)
            })        
        },
        [] 
    )   
        return(
            <div className='container main'>
                {products.map((product,index)=>{
                    return <Items key={index} product={product}/>            
                })}
            </div>
        )
}

export { RenderMenu }