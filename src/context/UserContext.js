import React, { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
export const UserContext = createContext()


export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ username: null, email: null })
	const [authStatus, setAuthStatus] = useState(false)

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	})

	const handleChange = (event) => {
		event.preventDefault()
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}

	const registerUser = async (dataForm,cb) => {
		try {
			const res = await clienteAxios.post('/user/post', dataForm)
			localStorage.setItem('token', res.data.token)
			setAuthStatus(true)
			cb()
		} catch (error) {
			console.log(error)
		}
	}

	const verifyingToken = async () => {
		const token = localStorage.getItem('token')

		if (token) {
			clienteAxios.defaults.headers.common['x-auth-token'] = token
		} else {
			delete clienteAxios.defaults.headers.common['x-auth-token']
		}

		try {
			const res = token && (await clienteAxios.get('/user/verify'))
			setUser(res.data)
			setAuthStatus(true)
		} catch (error) {
			console.log('Error Verificando token', error)
		}
	}

	const loginUser = async (dataForm, cb) => {
		try {
			const res = await clienteAxios.post('/user/login', dataForm)
			localStorage.setItem('token', res.data.token)
			setAuthStatus(true)
			cb()
		} catch (error) {
			console.log(error)
			Swal.fire({ 
				icon: 'error',
				title: 'Oops...',
				text: 'El usuario no existe, registrate para continuar.',
			})
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		setUser(null)
		setAuthStatus(false)
	}

	const data = { user, authStatus, handleChange, registerUser, verifyingToken, loginUser, logout }
	console.log('CONTEXTO USUARIO', data)
	return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
