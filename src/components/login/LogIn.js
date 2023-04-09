import React, { useState, useContext } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

function LogIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const {loginUser} = useContext(UserContext)
	

	const handleSubmit = (e) => {
		e.preventDefault()		
		localStorage.setItem('user', JSON.stringify({ email }))		
		loginUser({email, password},()=>{
			navigate('/perfil')

		})	
	}
	

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Iniciar Sesión</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label className='mt-2'>Correo electrónico</Form.Label>
							<Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label className='mt-2'>Contraseña</Form.Label>
							<Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
						</Form.Group>
						<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
							Iniciar
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/reestablecer-contraseña'>Olvidé mi contraseña</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				¿No tienes una cuenta? <Link to='/registrarse'>Registrarse</Link>
			</div>
		</>
	)
}

export {LogIn}
