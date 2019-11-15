import React from "react";
import Passages from "../components/passages/PassagesPage";
import { loadPassages } from "../redux/actions/passagesActions";

function index() {
  return (
    <div>
      <Passages />
    </div>
  );
}

index.getInitialProps = ({ reduxStore }) => {
  
  reduxStore.dispatch(loadPassages()); // action will dispatched on page load

  const state = reduxStore.getState(); // returns redux store
  console.log("this is the state:" + state);

  return {};
};

export default index;
