import styled from 'styled-components';
import './App.css';
import bg from './Images/bg.png'
import { MainLayout } from './Styles/Layout';
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100h;
  background-image: url(${props => props.bg});
  position: relative;
`
export default App;
