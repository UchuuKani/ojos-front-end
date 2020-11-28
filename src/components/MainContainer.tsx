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

const MainContainer: React.FC = (): ReactElement => {
  // const [state, send] = useReducer(initReducer, initialState);
  return (
    <div>
      <InfoForm />
    </div>
  );
};

export default MainContainer;
