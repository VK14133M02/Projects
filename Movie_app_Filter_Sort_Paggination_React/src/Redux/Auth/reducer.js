import {
  POST_LOGIN_FAILURE,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const initialState = {
  users: [],
  token: "",
  isAuth: false,
  isLoading: false,
  isError: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case POST_LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: payload, isAuth: true };
    case POST_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true, isAuth: false };

    case REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, users: [...state.users, payload] };
    case REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
