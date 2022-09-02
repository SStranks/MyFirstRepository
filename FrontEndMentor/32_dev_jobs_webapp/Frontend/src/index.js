import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './assets/styles/global-imports.scss';

// ReactDOM.render(<App />, document.querySelector('#root'));
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
