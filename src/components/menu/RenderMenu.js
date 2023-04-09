import React from 'react';
import { useEffect, useState } from 'react';
import Items from './Items';

function RenderMenu({category}){

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch (`http://localhost:4000/products/get?category=${category}`)
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