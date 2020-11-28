import React from "react";
import { render } from "react-dom";

import MainContainer from "./components/MainContainer";

const Application: React.FC = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};

render(<Application />, document.getElementById("root"));
