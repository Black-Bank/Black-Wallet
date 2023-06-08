import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import fetch from 'cross-fetch';
import config from '../../../../config';
//usar ou nai API de producao
const enabledProd = Boolean(
  config.NODE_ENV === 'prod' || config.NODE_ENV === 'production',
);

const link = new HttpLink({
  uri: enabledProd ? config.API_HEROKU : 'http://10.0.2.2:4000',
  fetch,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
