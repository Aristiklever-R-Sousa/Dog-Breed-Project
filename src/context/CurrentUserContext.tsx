/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect, useMemo } from "react";
import { UserContextType, UserType } from "../types/User";

const CurrentUserContext = React.createContext<UserContextType | null>(null);

type ProviderProps = {
  children: React.ReactNode;
};

const CurrentUserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>();
  const [authLoading, setAuthLoading] = useState(false);

  const checkLogin = () => {
    const token = localStorage.getItem("dog_breed_token");
    setAuthLoading(true);

    if (token) {
      // CALL NEXT PAGE
    } else {
      setAuthLoading(false);
      setCurrentUser(null);
    }
  };

  const handleLogout = () => {
    // Remover user from local storage to log user out
    setCurrentUser(null);
  };

  const stateValues = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      checkLogin,
      setAuthLoading,
      authLoading,
      handleLogout,
    }),
    []
  );

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <CurrentUserContext.Provider value={stateValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserProvider, CurrentUserContext };
