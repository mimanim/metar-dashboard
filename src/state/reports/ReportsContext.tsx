import React from "react";

import { DailySummary } from "../../types";

const ReportsContext = React.createContext({
  reports: new Map<string, DailySummary[]>(),
  loading: false,
});

export default ReportsContext;
