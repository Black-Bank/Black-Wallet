import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import config from '../../../../config';
//usar ou nai API de producao
const enabledProd = false;
const link = new HttpLink({
  uri: enabledProd ? config.API_HEROKU : 'http://10.0.2.2:4000',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
