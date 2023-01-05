import { CalendarBlank, TagSimple } from "phosphor-react";
import { useTransactions } from "../../hooks/useTransactions";
import { dateFormatter } from "../../utils/formatter";
import {
  CardTransaction,
  TransactionCardList,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

export function TransactionTable() {
  const { transactions, removeTransaction } = useTransactions();

  function handleDelete(id: number) {
    const confirm = window.confirm(
      "Esta ação não poderá ser desfeita, tem certeza que gostaria de excluir a transação?"
    );
    confirm && removeTransaction(id);
  }
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <thead hidden={true}>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>
                  <IconContext.Provider value={{ className: "FaTrashAlt" }}>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="FaTrashAlt-Button"
                    >
                      <FaTrashAlt />
                    </button>
                  </IconContext.Provider>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>

      <TransactionCardList>
        {transactions.map((transaction) => (
          <CardTransaction key={transaction.id}>
            <header>
              <div className="transaction-header">
                <div className="transaction-header-title">
                  <span>{transaction.title}</span>
                  <span className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </span>
                </div>

                <div className="transaction-delete">
                  <IconContext.Provider value={{ className: "FaTrashAlt" }}>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="FaTrashAlt-Button"
                    >
                      <FaTrashAlt />
                    </button>
                  </IconContext.Provider>
                </div>
              </div>
            </header>
            <footer>
              <div>
                <TagSimple size={16} />
                {transaction.category}
              </div>
              <div>
                <CalendarBlank size={16} />
                {dateFormatter.format(new Date(transaction.createdAt))}
              </div>
            </footer>
          </CardTransaction>
        ))}
      </TransactionCardList>
    </TransactionsContainer>
  );
}
