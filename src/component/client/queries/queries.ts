import {gql} from '@apollo/client';

export const GET_BALANCE = gql`
  query GetBalance($hashId: String!, $key: String!) {
    getBalance(HashId: $hashId, key: $key) {
      month
      week
      day
      updateDate
    }
  }
`;

export const GET_WALLETS = gql`
  query (
    $mainNet: String!
    $hashId: String!
    $key: String!
    $API_KEY: String!
  ) {
    getFormatedData(
      mainNet: $mainNet
      HashId: $hashId
      key: $key
      API_KEY: $API_KEY
    ) {
      WalletType
      address
      balance
      name
      privateKey
      coinPrice
      totalBalance
    }
  }
`;

export const CREAT_ETH_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createEthWallet(HashId: $hashId, name: $name, key: $key)
  }
`;

export const CREAT_BTC_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createBTCWallet(HashId: $hashId, name: $name, key: $key)
  }
`;

export const CREAT_TRANSACTION_WALLET = gql`
  mutation createTransaction(
    $value: Float!
    $addressTo: String!
    $privateKey: String!
    $addressFrom: String!
    $coin: String!
  ) {
    createTransaction(
      value: $value
      addressTo: $addressTo
      privateKey: $privateKey
      addressFrom: $addressFrom
      coin: $coin
    )
  }
`;

export const INSERT_BALANCE = gql`
  mutation InsertBalance($newBalance: Float!, $hashId: String!, $key: String!) {
    InsertBalance(NewBalance: $newBalance, HashId: $hashId, key: $key)
  }
`;

export const DELETE_WALLET = gql`
  mutation deleteWallet($address: String!, $key: String!, $hashId: String!) {
    deleteWallet(address: $address, key: $key, HashId: $hashId)
  }
`;
