import api from "../utils/api";
import { setAlert } from "./alert";

import {
  GET_LISTINGS,
  LISTING_ERROR,
  DELETE_LISTING,
  ADD_LISTING,
} from "../actions/types";

//Get Listings

export const getListings = () => async (dispatch) => {
  try {
    const res = await api.get("/listings");
    console.log("it got get listing");
    dispatch({
      type: GET_LISTINGS,
      payload: res.data,
    });
  } catch (err) {
    console.log("it passthe get catch in listing");
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Listing

export const deleteListing = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/listings/${id}`);

    dispatch({
      type: DELETE_LISTING,
      payload: id,
    });

    dispatch(setAlert("listing removed", "success"));
  } catch (err) {
    console.log("it passthe get catch in listing");
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//ADD Listing

export const addListing = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/listings", formData);

    dispatch({
      type: ADD_LISTING,
      payload: res.data,
    });

    dispatch(setAlert("Listing Created", "success"));
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
