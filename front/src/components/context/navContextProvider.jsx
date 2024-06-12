import React, { useContext, useState, createContext } from "react";

export const Navcontext = createContext(null);

export const useNavContext = () => {
  const context = useContext(Navcontext);
  if (!context) {
    throw new Error("This context must be used within a NavContextProvider");
  }
  return context;
};

export const Navcontextprovider = ({ children }) => {
  const [logged, setLogged] = useState(true);
  return (
    <Navcontext.Provider value={{ logged, setLogged }}>
      {children}
    </Navcontext.Provider>
  );
};

export default Navcontext;
