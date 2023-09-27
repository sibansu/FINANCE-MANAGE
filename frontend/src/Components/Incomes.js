import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import { useGlobalContext } from '../Context/globalContext'
import Form_new from './Form/Form_new'
import Incomeitems from './Incomeitems'
// import Form from './Form/form'
// import Form from '../Components/Form/Form'

function Incomes() {
  const {addIncome, incomes, getIncomes, deleteIncome, totalIncome}=useGlobalContext()
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="total-income">Total income: <span>₹{totalIncome()}</span></div>
        <div className="income-content">
          <div className="form-container">
            <Form_new></Form_new>
          </div>
          <div className="incomes">
            {incomes.map((inc)=>{
              const {_id, title, amount, date, category, description, type} = inc
              return <Incomeitems key={_id} id={_id}  title={title} description={description} date={date} amount={amount} deleteIncome={deleteIncome}  category={category} type={type}/>
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;;
  .income-content{
    display: flex;
    gap: 1rem;
    .incomes{
      flex: 1;
    }
  }
  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 190, 199, 1);
    border: 2px solid white;
    box-shadow: 0 1px 15px rgba(0,0,0,.06);
    border-radius: 20px;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 2.2rem;
    gap: 0.5rem;
    span{
      font-size: 2.5;
      font-weight: 800;
      color: green
    }
  }
`

export default Incomes