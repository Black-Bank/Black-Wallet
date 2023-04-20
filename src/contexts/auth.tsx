import React, {createContext, useState} from 'react';
interface IAuth {
  isUpdate: boolean;
  setIsUpdate: (param: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (param: boolean) => void;
}
export const AuthContext = createContext<IAuth>({
  isUpdate: false,
  setIsUpdate: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const contextObjects = {
    isUpdate,
    setIsUpdate,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
