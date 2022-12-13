import styled from 'styled-components'; //Vantagens de utilizar um styled-components. A nossa estilização fica dentro do escopo do componente que estamos utilizando, evitando sobreposição de estilos e usos de !important .Permite encadiamento, assim como o sass,
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}