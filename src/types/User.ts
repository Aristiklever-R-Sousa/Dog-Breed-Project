export type UserType = {
  email: string;
  idLogin: string;
  tokenLogin: string;
};

export type UserContextType = {
  currentUser?: UserType | null;
  authLoading: boolean;
  setCurrentUser: (user: UserType) => void;
  checkLogin: () => void;
  setAuthLoading: (isLoading: boolean) => void;
  handleLogout: () => void;
};
