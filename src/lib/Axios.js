import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://luisgustavofaria-json-server-controle-financeiro-teste.vercel.app',
})
