import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem 2rem;
  @media (max-width: 769px) {
    margin-top: 1.5rem;
  }
`

export const TransactionsTable = styled.table`
  margin-top: 4rem;

  width: 100%;
  border-spacing: 0 0.5rem; //Da um espaço entre as linhas da tabela

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }

    .FaTrashAlt {
      color: var(--red);

      &:hover {
        color: #971d32;
      }
    }

    .FaTrashAlt-Button {
      border: none;
      background: none;
    }
  }
@media (max-width: 769px) {
    display: none;
  }
`

export const TransactionCardList = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
`


export const CardTransaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  gap: 0.75rem;
  width: 100%;
  background: var(--shape);
  border-radius: 6px;
  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: ${(props) => props.theme['gray-300']};
  }

    .deposit {
      color: var(--green);
      @media (max-width: 769px) {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2rem;
    }
    }

    .withdraw {
    @media (max-width: 769px) {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2rem;
    }
      color: var(--red);
    }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme['gray-500']};
    div {
      display: flex;
      align-items: center;
      gap: 0.28rem;
    }
  }
`;
