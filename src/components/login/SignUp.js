import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'

function SingUp() {	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const navigate = useNavigate()
	const {registerUser} = useContext(UserContext)

	const handleSubmit = (event) => {		
		event.preventDefault()

		if (password === passwordConfirm) {
			localStorage.setItem('user', JSON.stringify({ email, password }))
			registerUser ({email, password},()=>{
				navigate('/perfil')
			})
			
		} else {
			Swal.fire({ 
				icon: 'error',
				title: 'Oops...',
				text: 'Las contraseñas no coinciden. Por favor, inténtelo de nuevo.',
			})
		}
	}
	
	return (
		<>
			<Card className='mt-5'>
				<Card.Body>
					<h2 className='text-center mb-4'>Registro</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label className='mt-2'>Correo electrónico</Form.Label>
							<Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label className='mt-2'>Contraseña</Form.Label>
							<Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
						</Form.Group>
						<Form.Group id='password-confirm'>
							<Form.Label className='mt-2'>Confirmar contraseña</Form.Label>
							<Form.Control type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
						</Form.Group>
						<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
							Registrarse
						</Button>
					</Form>
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link>
			</div>
		</>
	)
}

export {SingUp}
