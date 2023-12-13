import { createContext, useState } from "react";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") ?? ""
  );

  const saveUserName = (newUserName) => {
    setUserName(newUserName);
    localStorage.setItem("userName", newUserName);
  };

  const removeUserName = () => {
    setUserName("");
    localStorage.removeItem("userName");
  };

  return (
    <UserNameContext.Provider
      value={{
        userName,
        saveUserName,
        removeUserName,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};
