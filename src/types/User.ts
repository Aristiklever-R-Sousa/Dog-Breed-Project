export type UserType = {
  email: string;
  token: string;
};

export type ResType = {
  user: {
    _id: string;
    token: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

export type UserContextType = {
  currentUser: UserType;
  setCurrentUser: (user: UserType) => void;
  authLoading: boolean;
  setAuthLoading: (isLoading: boolean) => void;
  checkLogin: (mess?: boolean) => void;
  handleLogout: () => void;
};
