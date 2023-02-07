import { createContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

export const TransactionsContext = createContext({});

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  async function fetchTransactions(query) {
    const response = await api.get('transactions', {
      params: {
        q: query,
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}