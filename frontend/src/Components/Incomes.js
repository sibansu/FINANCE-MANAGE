import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import { useGlobalContext } from '../Context/globalContext'
import Form_new from './Form/Form_new'
// import Form from './Form/form'
// import Form from '../Components/Form/Form'

function Incomes() {
  const {addIncome}=useGlobalContext()
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form_new></Form_new>
          </div>
          <div className="incomes">

          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`

export default Incomes