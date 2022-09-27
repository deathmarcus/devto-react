import React, { useState, useContext, useEffect } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  //{token: "", }
  const login = () => {};
  const logut = () => {};

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    const localStorageToken = localStorage.getItem("token");

    if (localStorageUser)
      setUser({
        token: localStorageToken,
        user: JSON.parse(localStorageUser),
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUser = () => useContext(UserContext);
