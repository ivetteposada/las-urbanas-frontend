import React from 'react';
import { useEffect, useState } from 'react';
import UserAddress from './UserAddress';

function RenderAddress({emailUser}){

    const [address, setAddress] = useState([])
    const [selectedIdx, setSelectedIdx] = useState(null);

    useEffect(()=>{
        fetch (`${process.env.REACT_APP_BACKEND_URL}/address/get?user_email=${emailUser}`)
            .then (data => data.json())
            .then (address =>{
                setAddress(address.add)
            })        
        },
        []
    )   

    const handleClick = (index) => {
        setSelectedIdx(index);
    }

    return(
        <>
            <h3 className='text-center mb-4'>Mis direcciones </h3>
            <div className='address-container'>
                
                {address.map((address, index)=>{
                    return <UserAddress key={index}
                                selected={selectedIdx === index}
                                onClick={() => handleClick(index)}
                                address={address}/>
                })}
            </div>
        </>
    )
}

export default RenderAddress;