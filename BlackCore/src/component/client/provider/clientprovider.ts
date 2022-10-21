import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
//usar ou nai API de producao
const enabledProd = false;
const link = new HttpLink({
  uri: enabledProd
    ? 'https://credit-black.herokuapp.com//'
    : 'http://10.0.2.2:4000',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
