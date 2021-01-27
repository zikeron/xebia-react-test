import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const BASE_URI = 'https://api.github.com/graphql';
const { TOKEN } = process.env;

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
