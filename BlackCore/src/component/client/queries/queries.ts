import {gql} from '@apollo/client';

export const GET_WALLETS = gql`
  query ($hashId: String!, $key: String!) {
    getWallets(HashId: $hashId, key: $key) {
      name
      address
      privateKey
    }
  }
`;

export const CREAT_ETH_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createEthWallet(HashId: $hashId, name: $name, key: $key) {
      name
      address
      privateKey
    }
  }
`;
