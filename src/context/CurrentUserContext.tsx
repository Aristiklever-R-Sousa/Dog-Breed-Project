/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect, useMemo } from "react";
import { UserContextType, UserType } from "../types/User";

const CurrentUserContext = React.createContext<UserContextType | null>(null);

type ProviderProps = {
  children: React.ReactNode;
};

// class CurrentUserProvider extends React.Component<ProviderProps> {
//   constructor(props: ProviderProps) {
//     super(props);
//     this.state = {
//       currentUser: {},
//       authLoading: false
//     };
//   }

//   setCurrentUser() {

//   }

//   render() {
//     return <div />;
//   }
// }

const CurrentUserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>();
  const [authLoading, setAuthLoading] = useState(false);

  const checkLogin = () => {
    console.log("checkLogin");
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

export default CurrentUserProvider;
