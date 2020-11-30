import React, { useState, ReactElement, SyntheticEvent } from "react";

import { areValidDomains } from "../utils/areValidDomains";

import TestOptionSelector from "./TestOptionSelector";

const InfoForm: React.FC = (): ReactElement => {
  const [domains, setDomains] = useState<string>("");
  const [currentTest, setCurrentTest] = useState<string>("");

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

  console.log("current domains", domains);
  console.log("current test", currentTest);
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
