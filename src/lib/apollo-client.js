import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const BASE_URI = 'https://api.github.com/graphql';
const TOKEN = '1cda68aa60fa3ee0831b1cb709e1102d5b237238';

const httpLink = new HttpLink({
  uri: BASE_URI,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    },
  };
});

export const CustomClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
