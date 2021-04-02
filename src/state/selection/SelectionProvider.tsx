import React from "react";

import SelectionContext from "./SelectionContext";

const SelectionProvider: React.FC = ({ children }) => (
  <SelectionContext.Provider value={React.useState<string | null>(null)}>
    {children}
  </SelectionContext.Provider>
);

export default SelectionProvider;
