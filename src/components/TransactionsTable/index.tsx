import { CalendarBlank, TagSimple } from "phosphor-react";
import { useTransactions } from "../../hooks/useTransactions";
import { dateFormatter } from "../../utils/formatter";
import { CardTransaction, TransactionCardList, TransactionsContainer, TransactionsTable } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();
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
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>

      <TransactionCardList>
        {transactions.map((transaction) => (
          <CardTransaction key={transaction.id}>
            <header>
              <span>{transaction.title}</span>
              <span className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </span>
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
