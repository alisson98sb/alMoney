import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs'; //Construir uma api fake a partir do nosso front-end e utilizando a mensa rota localhost:3000
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          cratedAt: new Date()
        }
      ]
    })
  }
})


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
