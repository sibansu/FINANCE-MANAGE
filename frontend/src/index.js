import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './Styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './Context/globalContext';
// import { globalState } from './Styles/GlobalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyles></GlobalStyles>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);

