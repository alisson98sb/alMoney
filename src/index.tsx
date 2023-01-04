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
          title: 'Desenvolvimentooo',
          type: 'deposit',
          category: 'Salario',
          amount: 3000,
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
