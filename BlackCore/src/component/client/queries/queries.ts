import {gql} from '@apollo/client';

export const GET_WALLETS = gql`
  query {
    getWallets {
      name
      address
    }
  }
`;
