import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  onHandleCloseNewTransactionModal: () => void;
  isOpen: boolean;
}

export function NewTransactionModal({ onHandleCloseNewTransactionModal, isOpen }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    
    createTransaction({
      title,
      amount,
      type,
      category,
    })
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
          value={amount}  
          onChange={event => setAmount(Number(event.target.value))}
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
