import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const BASE_URL = 'https://graphql-weather-api.herokuapp.com/'

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
