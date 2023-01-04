import axios from 'axios';  //Biblioteca especializada em requizições http, no momento vamos utilizar só como uma tecnica de limpar o codigo (Adicionando a UrlBase e retornando um json daqui para não converter no componente), mas a biblioteca do axios vai alem, com ela podemos adicionar regras de interceptações em requizições e evio de informações (post)

export const api = axios.create({
    baseURL: 'https://al-money.vercel.app/api', //Endereço que se repete em todas as requisições 
})