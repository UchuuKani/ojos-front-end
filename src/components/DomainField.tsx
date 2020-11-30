import React, { ReactElement } from "react";

const DomainFields: React.FC = (): ReactElement => {
  return (
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
  );
};
