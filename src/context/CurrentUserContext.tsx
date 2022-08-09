import React, { useState, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { UserContextType, UserType } from "../types/User";

const CurrentUserContext = createContext<UserContextType>(null!);
CurrentUserContext.displayName = "UserContext";

type ProviderProps = {
  children: React.ReactNode;
};

const CurrentUserProvider: React.FC<ProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<UserType>({
    email: "",
    token: "",
  });

  const [authLoading, setAuthLoading] = useState(false);

  const checkLogin = (mess: boolean = false) => {
    if (currentUser.email === "") {
      if (mess) alert("Entre no sistema para poder acessar essa área.");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dog_breed_token");
    setCurrentUser({ email: "", token: "" });
    navigate("/login");
  };

  const stateValues = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      authLoading,
      setAuthLoading,
      checkLogin,
      handleLogout,
    }),
    [currentUser, authLoading]
  );

  return (
    <CurrentUserContext.Provider value={stateValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserProvider, CurrentUserContext };
