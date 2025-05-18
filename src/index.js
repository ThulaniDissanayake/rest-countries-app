import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the root DOM node
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

