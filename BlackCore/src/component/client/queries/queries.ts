import {gql} from '@apollo/client';

export const GET_BALANCE = gql`
  query GetBalance($hashId: String!, $key: String!) {
    getBalance(HashId: $hashId, key: $key) {
      month
      week
      day
    }
  }
`;

export const GET_WALLETS = gql`
  query ($hashId: String!, $key: String!) {
    getWallets(HashId: $hashId, key: $key) {
      name
      address
      privateKey
      WalletType
    }
  }
`;

export const CREAT_ETH_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createEthWallet(HashId: $hashId, name: $name, key: $key) {
      name
    }
  }
`;

export const CREAT_BTC_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createBTCWallet(HashId: $hashId, name: $name, key: $key) {
      name
    }
  }
`;

export const REMOVE_BALANCE = gql`
  mutation RemoveBalance($hashId: String!, $key: String!) {
    RemoveBalance(HashId: $hashId, key: $key)
  }
`;
