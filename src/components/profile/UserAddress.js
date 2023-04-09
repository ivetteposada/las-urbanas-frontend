import React from 'react';

function UserAddress({ address, selected, onClick }) {
    return (        
        <div className='user-address'>            
            <ul className={selected ? 'selected-address' : 'not-selected-address'}>
                <span>{address.street} </span>
                <span>#</span>
                <span>{address.number} </span> <br/>
                <span>Col. </span> 
                <span>{address.neighborhood} </span> <br/> 
                <span>Referencias </span> <br/>
                <span>{address.reference}</span>    
            </ul>
            <button onClick={onClick} className='btn-primary'>Enviar Aquí</button>
        </div>
    )
}

export default UserAddress;