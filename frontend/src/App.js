import styled from 'styled-components';
import './App.css';
import bg from './Images/bg.png'
import { MainLayout } from './Styles/Layout';
import Orb from './Components/Orb';
import Navigation from './Components/Navigation';
import { useMemo, useState } from 'react';
import Dashboard from './Components/Dashboard';
import Incomes from './Components/Incomes';
import Expenses from './Components/Expenses';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useGlobalContext } from './Context/globalContext';


function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}></Navigation>
        <main>
          {/* {displayData()} */}
            <Routes >
              <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
              <Route path='/incomes' element={<Incomes></Incomes>}/>
              <Route path='/expenses' element={<Expenses></Expenses>}/>
              
            </Routes>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`
export default App;
