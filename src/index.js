import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import {FilterProvider, CartProvider} from './context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer autoClose = {2000} position={'bottom-right'}/>
        <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

