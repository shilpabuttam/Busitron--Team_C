import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#82ca9d",
        },
    },
});

// ReactDOM.render(
//     <ThemeProvider theme={theme}>
//         <App />
//     </ThemeProvider>,
//     document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#1976d2",
//         },
//         secondary: {
//             main: "#82ca9d",
//         },
//     },
// });

// ReactDOM.render(
//     <ThemeProvider theme={theme}>
//         <App />
//     </ThemeProvider>,
//     document.getElementById("root")
// );

