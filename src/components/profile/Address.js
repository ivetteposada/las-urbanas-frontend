import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import  RenderAddress  from './RenderAddress'

export default function Address() {
	const navigate = useNavigate()	
    const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [reference, setReference] = useState('')	
	const [forceRender, setForceRender] = useState('123')	

	let emailUser = JSON.parse(localStorage.getItem('user')).email 
	let nameUser = emailUser.split('@')[0]

	const handleSubmit = (e) => {
		e.preventDefault();
	  
		const data = {
		  user_email : emailUser,
		  street,
		  number,
		  neighborhood,
		  reference,
		  
		};		
	  
		fetch(`${process.env.REACT_APP_BACKEND_URL}/address/post`, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
		  console.log(data);
		  setStreet('')
		  setNumber('')
		  setForceRender(data._id)
		})
		.catch(error => {
		  console.error('Error:', error);
		});
	  }

	function handleLogout() {		
		localStorage.clear()
		navigate('/')
	}

	return (
		<>
			<Link to="/perfil"><p>Perfil</p></Link> 
			<h4 className='text-center mb-4 profile-name'>Hola {nameUser}</h4>				
			<p className='mail-profile'>Correo electrónico:</p> 
			<p className='mail-profile2'>{emailUser}</p>									            
            <RenderAddress key={forceRender} emailUser={emailUser}></RenderAddress>
			<h2 className='text-center mb-4'>Registra tu dirección</h2>
			<Card>
				<Card.Body>
                    <Form onSubmit={handleSubmit}>
						<Form.Group id='street'>
							<Form.Label className='mt-2'>Calle</Form.Label>
							<Form.Control type='text' value={street} onChange={(e) => setStreet(e.target.value)} required />
						</Form.Group>
						<Form.Group id='number'>
							<Form.Label className='mt-2'>Número</Form.Label>
							<Form.Control type='text' value={number} onChange={(e) => setNumber(e.target.value)} required />
						</Form.Group>
                        <Form.Group id='neighborhood'>
							<Form.Label className='mt-2'>Colonia</Form.Label>
							<Form.Control type='text' value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} required />
						</Form.Group>                        
                        <Form.Group id='references'>
							<Form.Label className='mt-2'>Refrencias</Form.Label>
							<Form.Control type='text' value={reference} onChange={(e) => setReference(e.target.value)} required />
						</Form.Group>
						<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
							Guardar
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				<Button variant='link' onClick={handleLogout}>
					Cerrar Sesión
				</Button>
			</div>
		</>
	)
}

export {Address}