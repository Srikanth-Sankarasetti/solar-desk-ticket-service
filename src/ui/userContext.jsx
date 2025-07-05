import { useContext, createContext, useReducer } from "react";

const UserContext = createContext();

const initialUserState = {
  name: "",
  image: "",
  email: "",
  loading: false,
  error: null,
};

const USERACTION = {
  SET_USER: "SET_USER",
  LOADING_USER: "LOADING_USER",
  ERROR_USER: "ERROR_USER",
  CLEAR_USER: "CLEAR_USER",
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case USERACTION.SET_USER:
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        email: action.payload.email,
        loading: false,
        error: null,
      };
    case USERACTION.LOADING_USER:
      return { ...state, loading: true, error: null };
    case USERACTION.ERROR_USER:
      return { ...state, loading: false, error: action.payload.message };
    case USERACTION.CLEAR_USER:
      return {
        ...state,
        name: "",
        image: "",
        email: "",
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [loginuserstate, userDispatch] = useReducer(
    userDataReducer,
    initialUserState
  );

  return (
    <UserContext.Provider value={{ loginuserstate, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalUserContext = () => useContext(UserContext);

export { USERACTION };
