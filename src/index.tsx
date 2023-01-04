import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'; //Construir uma api fake a partir do nosso front-end e utilizando a mensa rota localhost:3000
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  models: {
    transaction: Model, 
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento',
          type: 'deposit',
          category: 'Salario',
          amount: 3000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Freelance',
          type: 'deposit',
          category: 'Salario',
          amount: 1500,
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date()
        },
        {
          id: 4,
          title: 'Mercado',
          type: 'withdraw',
          category: 'Casa',
          amount: 500,
          createdAt: new Date()
        },
        {
          id: 5,
          title: 'Trabalho fixo',
          type: 'deposit',
          category: 'Salario',
          amount: 5000,
          createdAt: new Date()
        },
        {
          id: 6,
          title: 'Agua e Luz',
          type: 'withdraw',
          category: 'Casa',
          amount: 200,
          createdAt: new Date()
        }]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
