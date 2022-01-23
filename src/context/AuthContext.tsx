import { createContext, SetStateAction, Dispatch } from "react";

interface AuthContextState {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthContextState);

export default AuthContext;
