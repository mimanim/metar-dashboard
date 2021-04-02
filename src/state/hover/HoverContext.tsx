import React from "react";

type HoverContextValue = [
  string | null,
  (hoveredObjectId: string | null) => void
];

const HoverContext = React.createContext<HoverContextValue>([null, () => {}]);

export default HoverContext;
