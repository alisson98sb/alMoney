import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
    useEffect(() => {
        api.get("transactions") //localhost:3000/api/transactions
          .then((response) => console.log(response.data));
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td className="deposit">R$1.000</td>
                        <td>Desenvolvimento</td>
                        <td>13/12/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$500</td>
                        <td>Desenvolvimento</td>
                        <td>13/12/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}