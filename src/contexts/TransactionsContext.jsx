import { createContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext({});

export function TransactionsProvider({ children }) {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}