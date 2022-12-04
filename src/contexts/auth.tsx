import React, {createContext, useState} from 'react';
interface IAuth {
  isUpdate: boolean;
  setIsUpdate: (param: boolean) => void;
}
export const AuthContext = createContext<IAuth>({
  isUpdate: false,
  setIsUpdate: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <AuthContext.Provider value={{isUpdate, setIsUpdate}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
