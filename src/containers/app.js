import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { CustomClient } from '../lib/apollo-client';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Footer } from '../components/Footer';

const headerTitle = 'Xebia React Test';

export const App = () => {
  return (
    <ApolloProvider client={CustomClient()}>
      <Header title={headerTitle} />
      <Search />
      <Footer />
    </ApolloProvider>
  );
};
