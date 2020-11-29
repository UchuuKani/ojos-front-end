import React, { useReducer, ReactElement } from "react";

import InfoForm from "./InfoForm";

interface IState {
  domains: string[];
  status: string;
}

interface IEvent {
  event: string;
}

const initReducer = (state: IState, event: IEvent): number => {
  return 5;
};

const initialState = {};

// idea is that InfoForm contains all form state and this MainContainer handles state/logic for everything else such as page transitions/conditional rendering
// at first, show the form. When user submits the form, render a different component and don't show form anymore
// logic to reset form?

const testStyle = {
  backgroundColor: "lightblue",
};

const MainContainer: React.FC = (): ReactElement => {
  // const [state, send] = useReducer(initReducer, initialState);
  return (
    <div style={testStyle}>
      <InfoForm />
    </div>
  );
};

export default MainContainer;
