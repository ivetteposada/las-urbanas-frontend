import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

export default class PaypalButton extends React.Component {
	render() {

		
		const onSuccess = (payment) => {			
			console.log('The payment was succeeded!', payment)			
		}

		const onCancel = (data) => {			
			console.log('The payment was cancelled!', data)			
		}

		const onError = (err) => {			
			console.log('Error!', err)			
		}

		let env = 'sandbox' 
		let currency = 'MXP'
		let total = this.props.total

		const client = {
			sandbox: process.env.REACT_APP_PAYPAL_SANDBOX_KEY,
			production: 'YOUR-PRODUCTION-APP-ID',
		}
		
		return <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
	}
}