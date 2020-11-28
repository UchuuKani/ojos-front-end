import React, { useState, ReactElement } from "react";

import TestOptionSelector from "./TestOptionSelector";

const InfoForm: React.FC = (): ReactElement => {
  const [domains, setDomains] = useState<string>("");
  const [currentTest, setCurrentTest] = useState<string>("test-1");

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

  console.log("current domains", domains);
  console.log("current test", currentTest);
  return (
    <form>
      <label htmlFor="domains">
        Domains (ending in .com)
        <input
          type="text"
          name="domains"
          value={domains}
          onChange={handleChangeDomains}
        />
      </label>
      <label htmlFor="select-tests">
        Select a Test
        <TestOptionSelector handleChange={handleChangeTest} />
      </label>
      <button type="button">Submit</button>
    </form>
  );
};

export default InfoForm;
