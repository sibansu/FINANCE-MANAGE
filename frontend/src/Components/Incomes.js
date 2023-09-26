import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import { useGlobalContext } from '../Context/globalContext'
import Form_new from './Form/Form_new'
import Incomeitems from './Incomeitems'
// import Form from './Form/form'
// import Form from '../Components/Form/Form'

function Incomes() {
  const {addIncome, incomes, getIncomes, deleteIncome}=useGlobalContext()
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form_new></Form_new>
          </div>
          <div className="incomes">
            {incomes.map((inc)=>{
              const {_id, title, amount, date, category, description} = inc
              return <Incomeitems key={_id} id={_id}  title={title} description={description} date={date} amount={amount} deleteIncome={deleteIncome}  category={category}/>
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
`

export default Incomes