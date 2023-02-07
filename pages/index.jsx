import { Header } from "../src/components/header/Header";
import { Summary } from "../src/components/summary/Summary";
import { Transactions } from "../src/components/transactions/Transactions";
import { TransactionsProvider } from "../src/contexts/TransactionsContext";

export default function HomePage(){

	return (
		<div>
      <TransactionsProvider>
				<Header />
			  <Summary />
        <Transactions />
      </TransactionsProvider>
		</div>
    )
}