import api from "../utils/api";
import { setAlert } from "./alert";

import {
  GET_LISTINGS,
  GET_LISTING,
  LISTING_ERROR,
  DELETE_LISTING,
  ADD_LISTING,
  GETCURRENT_LISTING,
  CLEAR_LISTING,
} from "../actions/types";

//Get Listings

export const getListings = () => async (dispatch) => {
  try {
    const res = await api.get("/listing");

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

// Get list
export const getListing = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/listing/${id}`);

    dispatch({
      type: GET_LISTING,
      payload: res.data,
    });

    console.log("it fired single listing");
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//create or update listing
export const createListing = (formData, history, edit = false) => async (
  dispatch
) => {
  const res = await api.post("/listing", formData);

  console.log("it got to the update create route");
  try {
    dispatch({
      type: GET_LISTING,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "listing updated" : "Listing Created"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get current users listing

export const getCurrentListing = () => async (dispatch) => {
  try {
    const res = await api.get("/listing/me");

    dispatch({
      type: GETCURRENT_LISTING,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Listing

export const deleteListing = (id) => async (dispatch) => {
  try {
    await api.delete(`/listing/${id}`);

    dispatch({
      type: DELETE_LISTING,
      payload: id,
    });
    dispatch({
      type: CLEAR_LISTING,
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
    const res = await api.post("/listing", formData);

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
