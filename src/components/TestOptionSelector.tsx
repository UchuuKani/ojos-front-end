import React, { ReactElement } from "react";

export interface ITest {
  name: string;
  value: string;
}

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const testOptions: ITest[] = [
  { name: "---", value: "" },
  { name: "Test 1", value: "test-1" },
  { name: "Test 2", value: "test-2" },
  { name: "Test 3", value: "test-3" },
  {
    name:
      "Test Reeeeeeeeeeeeeeeealyyyyyyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa long 4",
    value: "test-4",
  },
];

const TestOptionSelector: React.FC<IProps> = ({
  handleChange,
}): ReactElement => {
  return (
    <select
      name="select-tests"
      onChange={handleChange}
      className="border-2 border-black m-2"
    >
      {testOptions.length > 0
        ? testOptions.map((option, idx) => {
            return (
              <option key={idx} value={option.value}>
                {option.name}
              </option>
            );
          })
        : null}
    </select>
  );
};

export default TestOptionSelector;
