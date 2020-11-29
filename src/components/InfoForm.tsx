import React, {
  useState,
  ReactElement,
  SyntheticEvent,
  CSSProperties,
} from "react";

import { areValidDomains } from "../../utils/areValidDomains";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="domains">
        Domains (ending in .com)
        <input
          type="text"
          name="domains"
          value={domains}
          onChange={handleChangeDomains}
        />
      </label>
      <br />
      <label htmlFor="select-tests">
        Select a Test
        <TestOptionSelector handleChange={handleChangeTest} />
      </label>
      <br />
      <button className="border p-1.5 shadow" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InfoForm;
