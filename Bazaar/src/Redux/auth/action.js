import axios from "axios";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const registerUser = (payload) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`https://mock-server-m6hv.onrender.com/user`, payload)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: REGISTER_FAILURE }));
};

export { registerUser };
