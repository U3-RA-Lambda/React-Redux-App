import {
    UPDATE_TITLE,
    TOGGLE_EDITING,
    FETCHING_FACT_START,
    FETCHING_FACT_SUCCESS
  } from "../actions/action";
  
  const initialState = {
    title: "Cat Facts!",
    editing: false,
    loading: false,
    fact: null,
    isFetching: false,
    error: ""
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_FACT_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_FACT_SUCCESS:
        return {
          ...state,
          quote: action.payload,
          isFetching: false
        };
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      default:
        return state;
    }
  };
  