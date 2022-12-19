import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  onHandleCloseNewTransactionModal: () => void;
  isOpen: boolean;
}



export function NewTransactionModal({
  onHandleCloseNewTransactionModal,
  isOpen,
}: NewTransactionModalProps) {
  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    
    const data = {
      title,
      value,
      type,
      category  
    }
    api.post('/transactions', data)
  }
  

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onHandleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <img
        src={closeImg}
        alt="Fechar modal"
        className="react-modal-close"
        onClick={onHandleCloseNewTransactionModal}
      />
      <Container onSubmit={handleCreateNewTransaction}>
        {/* <button onClick={onHandleCloseNewTransactionModal}>close</button> */}
        <h2>Cadastrar Transação</h2>
        <input 
          placeholder="Titulo" 
          value={title}  
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="value"
          placeholder="Valor" 
          value={value}  
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button" 
            onClick={()=>{setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <span>Entrada</span>
            <img src={icomeImg} alt="Entrada" />
          </RadioBox>

          <RadioBox
            type="button"
            onClick={()=>{setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <span>Saida</span>
            <img src={outcomeImg} alt="Saida" />
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={category}  
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
