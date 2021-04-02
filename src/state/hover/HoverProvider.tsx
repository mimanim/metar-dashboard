import React from "react";

import HoverContext from "./HoverContext";

const HoverProvider: React.FC = ({ children }) => (
  <HoverContext.Provider value={React.useState<string | null>(null)}>
    {children}
  </HoverContext.Provider>
);

export default HoverProvider;
