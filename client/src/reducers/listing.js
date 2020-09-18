import {
  GET_LISTINGS,
  LISTING_ERROR,
  DELETE_LISTING,
  ADD_LISTING,
  GET_LISTING,
  GETCURRENT_LISTING,
  CLEAR_LISTING,
} from "../actions/types";
const initialState = {
  listings: [],
  listing: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETCURRENT_LISTING:
      return {
        ...state,
        listing: payload,
        loading: false,
      };
    case GET_LISTINGS:
      return {
        ...state,
        listings: payload,
        loading: false,
      };
    case GET_LISTING:
      return {
        ...state,
        listing: payload,
        loading: false,
      };
    case ADD_LISTING:
      return {
        ...state,
        listings: [...state.listings, payload],
        loading: false,
      };

    case LISTING_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DELETE_LISTING:
      return {
        ...state,
        listings: state.listings.filter((listing) => listing._id !== payload),
        loading: false,
      };
    case CLEAR_LISTING:
      return {
        ...state,
        listing: null,
      };

    default:
      return state;
  }
}
