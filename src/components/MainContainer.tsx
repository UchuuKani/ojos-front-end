import React, { useReducer, ReactElement } from "react";

import InfoForm from "./InfoForm";
import InfoFormAdded from "./InfoFormClickToAddFields";

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

const MainContainer: React.FC = (): ReactElement => {
  // const [state, send] = useReducer(initReducer, initialState);
  return (
    <main className="container mx-auto px-4 py-4 flex justify-center items-center flex-col">
      <h1 className="m-5">Test Creator for Ojos</h1>
      <InfoForm />
      <InfoFormAdded />
    </main>
  );
};

export default MainContainer;
