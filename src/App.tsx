import React from "react";
import styled from "styled-components";

import DataList from "./components/DataList";
import MapContainer from "./components/MapContainer";
import WeatherStationDetails from "./components/WeatherStationDetails";
import SelectionContext from "./state/selection/SelectionContext";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #6d706f;
`;
const StyledLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;

const StyledMapWrapper = styled.div`
  height: 100%;
  flex: 2;
`;

function App() {
  const [selectedObjectId] = React.useContext(SelectionContext);

  return (
    <StyledApp className="App">
      <StyledLayout>
        <StyledMapWrapper>
          <MapContainer />
        </StyledMapWrapper>
        {selectedObjectId === null ? <DataList /> : <WeatherStationDetails />}
      </StyledLayout>
    </StyledApp>
  );
}

export default App;
