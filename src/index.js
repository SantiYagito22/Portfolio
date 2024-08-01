import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '../src/Components/App';
import reportWebVitals from './reportWebVitals';
import './Components/LanguageI18n/i18n';
import { CurrentIndexProvider } from './Components/CurrentIndexProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentIndexProvider>
    <App />
  </CurrentIndexProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
