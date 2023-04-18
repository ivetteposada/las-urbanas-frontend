import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const navigate = useNavigate()
    
    function handleLogout() {		
		localStorage.clear()
		navigate('/')
	}
	
	return (
		<>
			<div className='container main orders'>
                <Link to="/perfil/direcciones">
                    <button className='order-btn'>Mis direcciones</button>
                </Link>  
                <Link to="/carrito">
                    <button className='order-btn'>Mi carrito</button>
                </Link>  
                <Link to="/menu">
                    <button className='order-btn'>Menú</button>
                </Link>                    
            </div>		
            <div className='w-100 text-center mt-2'>
				<Button variant='link' onClick={handleLogout}>
					Cerrar Sesión
				</Button>
			</div>	
		</>
	)
}

export {Profile}