import { createContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {

  const [activeNav, setActiveNav] = useState('#contact')

  return (
    <AppContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;