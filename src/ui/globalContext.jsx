import { createContext, useReducer, useContext } from "react";

const initialState = {
  users: [],
  plants: [],
  issuesPlants: [],
  loading: {
    users: false,
    plants: false,
    issuesPlants: false,
  },
  error: {
    users: null,
    plants: null,
    issuesPlants: null,
  },
};

const ACTIONS = {
  SET_USERS: "SET_USERS",
  SET_PLANTS: "SET_PLANTS",
  LOADING_USERS: "LOADING_USERS",
  LOADING_PLANTS: "LOADING_PLANTS",
  ERROR_USERS: "ERROR_USERS",
  ERROR_PLANTS: "ERROR_PLANTS",
  SET_ISSUES_PLNATS: "SET_ISSUES_PLNATS",
  LOADING_ISSUES_PLANTS: "LOADING_ISSUES_PLANTS",
  ERROR_ISSUES_PLANTS: "ERROR_ISSUES_PLANTS",
};

function globalReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: null },
      };
    case ACTIONS.SET_PLANTS:
      return {
        ...state,
        plants: action.payload,
        loading: { ...state.loading, plants: false },
        error: { ...state.error, plants: null },
      };
    case ACTIONS.SET_ISSUES_PLNATS:
      return {
        ...state,
        issuesPlants: action.payload,
        loading: { ...state.loading, issuesPlants: false },
        error: { ...state.error, issuesPlants: null },
      };
    case ACTIONS.LOADING_USERS:
      return {
        ...state,
        loading: { ...state.loading, users: true },
        error: { ...state.error, users: null },
      };
    case ACTIONS.ERROR_USERS:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: action.payload },
      };
    case ACTIONS.LOADING_PLANTS:
      return {
        ...state,
        loading: { ...state.loading, plants: true },
        error: { ...state.error, plants: null },
      };
    case ACTIONS.ERROR_PLANTS:
      return {
        ...state,
        loading: { ...state.loading, plants: false },
        error: { ...state.error, plants: action.payload },
      };
    case ACTIONS.LOADING_ISSUES_PLANTS:
      return {
        ...state,
        loading: { ...state.loading, issuesPlants: true },
        error: { ...state.error, issuesPlants: null },
      };
    case ACTIONS.ERROR_ISSUES_PLANTS:
      return {
        ...state,
        loading: { ...state.loading, issuesPlants: false },
        error: { ...state.error, issuesPlants: action.payload },
      };
    default:
      return state;
  }
}

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export { ACTIONS };
