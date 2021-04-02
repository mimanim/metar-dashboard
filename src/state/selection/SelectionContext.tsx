import React from "react";

type SelectionContextValue = [
  string | null,
  (selectedObjectId: string | null) => void
];

const SelectionContext = React.createContext<SelectionContextValue>([
  null,
  () => {},
]);

export default SelectionContext;
