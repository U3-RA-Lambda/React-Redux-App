// Action creators
import axios from "axios";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_FACT_START = "FETCHING_FACT_START";
export const FETCHING_FACT_SUCCESS = "FETCHING_FACT_SUCCESS";
export const FETCHING_FACT_FAILURE = "FETCHING_FACT_FAILURE";

export function toggleEditing() {
  return { type: "TOGGLE_EDITING" };
}

export const updateTitle = newTitle => {
  return { type: "UPDATE_TITLE", payload: newTitle };
};

const headers = {
  Accept: "application/json"
};

export const getFact = () => dispatch => {
  dispatch({ type: FETCHING_FACT_START });
  axios
    .get("https://cat-fact.herokuapp.com/facts/random", { headers })
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_FACT_SUCCESS, payload: res.data.facts });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCHING_FACT_FAILURE,
        payload: err.response.message
      });
    });
};
