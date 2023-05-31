import React, {useContext} from 'react';
import {WalletList} from '../../component/walletList/WalletList';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {AuthContext} from '../../contexts/auth';
import {Footer} from '../../component/footer/Footer';

export const WalletListScreen = () => {
  const {data} = useGetWallets();
  const {isUpdate} = useContext(AuthContext);

  return (
    <>
      <WalletList data={data} isUpdate={isUpdate} />
      <Footer />
    </>
  );
};
