import { createContext, useContext } from 'react';

const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
  // Поки заглушка
  const wallet = null;

  return (
    <Web3Context.Provider value={{ wallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);

