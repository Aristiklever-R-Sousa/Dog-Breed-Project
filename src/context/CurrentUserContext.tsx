/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect, useMemo } from "react";
import { UserContextType, UserType } from "../types/User";
import Client from "../common/api";

const CurrentUserContext = React.createContext<UserContextType>({});

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
      // REDIRECT FOR NEXT PAGE
    } else {
      Client.post("/register", null, {
        headers: {
          email: "kleversousa13@gmail.com",
        },
      }).then((res: { data: { user: UserType } }) => {
        const { user } = res.data;
        console.log(user, "IN CHECK");
        setAuthLoading(false);

        if (user) {
          setCurrentUser(user);
          // STORING THE TOKEN RETURNED FOR THE ENDPOINT
          localStorage.setItem("dog_breed_token", user.token);
        }
      });

      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dog_breed_token");
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
