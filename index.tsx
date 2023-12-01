import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import React from 'react';

const client = new ApolloClient({ 
  uri: 'https://rickandmortyapi.com/graphql', 
  cache: new InMemoryCache(), 
});

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
} else {
  throw new Error("Element with ID 'root' not found");
}

