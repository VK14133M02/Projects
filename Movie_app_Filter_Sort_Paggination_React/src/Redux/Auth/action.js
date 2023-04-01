import axios from "axios";
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const loginAdmin = (payload) => (dispatch) => {
  dispatch({ type: POST_LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((res) =>
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data.token })
    )
    .catch((err) => console.log(err));
};

const registerUser = (payload) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`https://mock-server-m6hv.onrender.com/user`, payload)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: REGISTER_FAILURE }));
};

export { loginAdmin, registerUser };
