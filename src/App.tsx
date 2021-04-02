import MapContainer from './components/MapContainer';
import DataList from './components/DataList';
import styled from 'styled-components';

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
  return (
    <StyledApp className="App">
      <StyledLayout>
        <StyledMapWrapper>
          <MapContainer />
        </StyledMapWrapper>
        <DataList stations={[]}/>
      </StyledLayout>
    </StyledApp>
  );
}

export default App;
