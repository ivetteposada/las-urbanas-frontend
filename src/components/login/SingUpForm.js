import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Singup from './Singup'
import LogIn from './LogIn'
import Profile from './Profile'
import Home from './Home'
import ForgotPassword from './ForgotPassword'
import PrivateRoutes from '../auth/PrivateRoutes'
import Orders from '../profile/Address'
import Orders from '../profile/Orders'

function SingUpForm() {
	return (
		<Container className='d-flex aling-items-center justify-content-center' style={{ minHeight: '100vh' }}>
			<div className='w-100' style={{ maxWidth: '400px' }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route element={<PrivateRoutes />}>
						<Route path='/perfil' element={<Profile />} />
						<Route path='/perfil/direcciones' element={<Address />} />
						<Route path='/perfil/ordenes' element={<Orders />} />
					</Route>
					<Route path='/login' element={<Login />} />
					<Route path='/singup' element={<Singup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
			</div>
		</Container>
	)
}

export {SingUpForm}
