import { createContext, useContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(authContext);
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [authUser, setauthUser] = useState(
    JSON.parse(localStorage.getItem("current-chat-user")) || null
  )

  return (
    <authContext.Provider value={{ authUser, setauthUser }}>
      {children}
    </authContext.Provider>
  );
};
