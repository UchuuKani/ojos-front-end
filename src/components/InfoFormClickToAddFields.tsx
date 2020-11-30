import React, {
  useReducer,
  ReactElement,
  SyntheticEvent,
} from "react";

import { areValidDomains } from "../utils/areValidDomains";

import TestOptionSelector from "./TestOptionSelector";

// in this component, want to be able to add N number of text inputs for each domain a user wants to enter
// should include a button to add a domain (one button, maybe close to label) and N number of buttons to remove a domain

// need state to capture domain list, so that content of the list may be altered (how many, which are included?)
// should also write another utility function to validate domains
// could use useReducer? as well as a custom hook?

const eventConstants = {
  ADD_DOMAIN: "ADD_DOMAIN",
  REMOVE_DOMAIN: "REMOVE_DOMAIN",
  ADD_TEST: "ADD_TEST",
  REMOVE_TEST: "REMOVE_TEST",
};

interface RState {
  domains: string[];
  tests: string[];
}

interface SendEvent {
  type: string;
  payload?: string;
}

const initialState: RState = {
  domains: [],
  tests: [],
};

const reducer = (state: RState, event: SendEvent): RState => {
  switch (event.type) {
    case eventConstants.ADD_DOMAIN:
      return {
        ...state,
        domains: [...state.domains, event.payload as string],
      };
    case eventConstants.REMOVE_DOMAIN:
      return {
        ...state,
        domains: state.domains.filter((domain) => {
          return domain !== event.payload;
        }),
      };
    case eventConstants.ADD_TEST:
      return {
        ...state,
        tests: [...state.tests, event.payload as string],
      };
    case eventConstants.REMOVE_TEST:
      return {
        ...state,
        tests: state.tests.filter((test) => {
          return test !== event.payload;
        }),
      };
    default:
      return state;
  }
};

const InfoForm: React.FC = (): ReactElement => {
  const [state, send] = useReducer(reducer, initialState);

  const handleChangeDomains = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const currentDomains = event.target ? event.target.value : "";
    setDomains(currentDomains);
  };

  const handleChangeTest = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const currentTest = event.target ? event.target.value : "";
    setCurrentTest(currentTest);
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log(
      "testing domain validation",
      areValidDomains(domains),
    );
  };

  console.log("current domains", state.domains);
  console.log("current test", state.tests);
  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 rounded bg-green-100"
    >
      <div className="py-2 m-5">
        <label htmlFor="domains">
          Domains (ending in .com)
          <input
            type="text"
            name="domains"
            value={domains}
            onChange={handleChangeDomains}
            className="border-2 m-2 border-gray-500"
          />
        </label>
      </div>
      <div className="py-2 m-5">
        <label htmlFor="select-tests">
          Select a Test
          <TestOptionSelector handleChange={handleChangeTest} />
        </label>
      </div>
      <div className="py-2 flex justify-center items-center m-5">
        <button
          className="border-2 border-black p-1.5 w-1/4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InfoForm;
