import {
  DELETE_STOCK_FAILURE,
  DELETE_STOCK_REQUEST,
  DELETE_STOCK_SUCCESS,
  GET_STOCK_FAILURE,
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  POST_STOCK_FAILURE,
  POST_STOCK_REQUEST,
  POST_STOCK_SUCCESS,
  UPDATE_STOCK_FAILURE,
  UPDATE_STOCK_REQUEST,
  UPDATE_STOCK_SUCCESS,
} from "./actionType";

const initialState = {
  stocks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // get Request
    case GET_STOCK_REQUEST:
      return { ...state, isLoading: true };
    case GET_STOCK_SUCCESS:
      return { ...state, isLoading: false, stocks: payload };
    case GET_STOCK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // post request

    case POST_STOCK_REQUEST:
      return { ...state, isLoading: true };
    case POST_STOCK_SUCCESS:
      return { ...state, isLoading: false, stocks: [...state.stocks, payload] };
    case POST_STOCK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    //Patch Request

    case UPDATE_STOCK_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_STOCK_SUCCESS:
      let updatedStock = state.stocks.map((item) =>
        item.id === payload.id ? payload : item
      );
      return { ...state, isLoading: false, stocks: updatedStock };
    case UPDATE_STOCK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // Delete Request

    case DELETE_STOCK_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_STOCK_SUCCESS:
      let filteredStocks = state.stocks.filter((item) => item.id === payload);
      return { ...state, isLoading: false, stocks: filteredStocks };
    case DELETE_STOCK_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
