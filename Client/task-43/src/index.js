import React from "react";
import ReactDOM from "react-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "./App";

const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, // Replace with your client ID
    currency: "USD",
};

ReactDOM.render(
    <PayPalScriptProvider options={initialOptions}>
        <App />
    </PayPalScriptProvider>,
    document.getElementById("root")
);
