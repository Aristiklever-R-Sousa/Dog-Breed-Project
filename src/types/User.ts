export type UserType = {
  email?: string;
  _id: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
};

export type UserContextType = {
  currentUser?: UserType | null;
  authLoading?: boolean;
  setCurrentUser?: (user: UserType) => void;
  checkLogin?: () => void;
  setAuthLoading?: (isLoading: boolean) => void;
  handleLogout?: () => void;
};
