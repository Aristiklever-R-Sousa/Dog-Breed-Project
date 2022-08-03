export type UserType = {
  email: string;
};

export type DataLogin = {
  id: string;
  token: string;
}

export type UserContextType = {
  currentUser?: UserType | null;
  dataLogin?: DataLogin;
  authLoading: boolean;
  setCurrentUser: (user: UserType) => void;
  checkLogin: () => void;
  setAuthLoading: (isLoading: boolean) => void;
  handleLogout: () => void;
};
