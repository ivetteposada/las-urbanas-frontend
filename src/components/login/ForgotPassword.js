import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function ForgotPassword() {
	const emailRef = useRef()
	const navigate = useNavigate()

	//logica de como restablecer la contraseña
	const handleSubmit = (e) => {
		e.preventDefault()
		const email = emailRef.current.value
		localStorage.setItem('user', JSON.stringify({ email }))
		navigate('/')
		Swal.fire({ 
			icon: 'success',
			title: 'Correo electrónico enviado',
			text: 'Se ha enviado un correo electrónico con las instrucciones para reestablecer tu contraseña.'
		})
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Restablecer contraseña</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label className='mt-2'>Correo electrónico</Form.Label>
							<Form.Control type='email' ref={emailRef} required />
						</Form.Group>
						<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
							Restablecer
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/login'>Iniciar Sesión</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				¿No tienes una cuenta? <Link to='/singup'>Registrarse</Link>
			</div>
		</>
	)
}

export {ForgotPassword}