import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const TransactionsContext = createContext({})

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([])

  async function fetchTransactions(query) {
    const response = await axios.get(
      'https://luisgustavofaria-json-server-controle-financeiro-teste.vercel.app/transactions',
      {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      },
    )

    setTransactions(response.data)
  }

  async function createTransaction(data) {
    const { description, price, category, type } = data

    const response = await axios.post(
      'https://luisgustavofaria-json-server-controle-financeiro-teste.vercel.app/transactions',
      {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      },
    )

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
