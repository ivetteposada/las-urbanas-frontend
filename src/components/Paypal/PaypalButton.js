import React from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function PaypalBtn({ value }) {

  return (

    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_SANDBOX_KEY }}>

      <PayPalButtons

        style={{ layout: "vertical" }}

        createOrder={(data, actions) => {

          return actions.order.create({

            purchase_units: [

              {

                amount: {

                  value: value,

                },

              },

            ],

          });

        }}

        onApprove={(data, actions) => {

          return actions.order.capture().then((details) => {

            const name = details.payer.name.given_name;

            alert(`Transaction completed by ${name}`);

          });

        }}

      />

    </PayPalScriptProvider>

  );

}


export default PaypalBtn;