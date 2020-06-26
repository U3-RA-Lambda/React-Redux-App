import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFact} from "../actions/action";

const Fact = ({ getFact, fact, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getFact();
  }, [getFact]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Cat fact: {fact}</h2>
      <button onClick={getFact}>Get a new cat fact, ACT, now!</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.fact,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFact }
)(Fact);
