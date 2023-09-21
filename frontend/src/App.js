import styled from 'styled-components';
import './App.css';
import bg from './Images/bg.png'
import { MainLayout } from './Styles/Layout';
import Orb from './Components/Orb';
import Navigation from './Components/Navigation';
// import Orb from './Components/Button/Orb/Orb';

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation></Navigation>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`
export default App;
