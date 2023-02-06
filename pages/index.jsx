import { useState, useEffect } from "react";

import { Header } from "../src/components/header/Header";
import { Summary } from "../src/components/summary/Summary";
import { Transactions } from "../src/components/transactions/Transactions";

export default function HomePage(){

  const [transactions, setTransactions] = useState([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, []);

	return (
		<div>
			<Header />
			<Summary transactions={transactions}/>
      <Transactions transactions={transactions}/>
		</div>
    )
}