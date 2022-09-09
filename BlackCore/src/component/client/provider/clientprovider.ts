import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const link = new HttpLink({uri: 'http://10.0.2.2:4000'});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
