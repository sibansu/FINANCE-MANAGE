import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Chart from './Chart/Chart'
import { rupee } from '../Utils/icons'
import { useGlobalContext } from '../Context/globalContext'
import History from './History/History'

function Dashboard() {
  const {totalExpense, incomes, expenses, totalIncome}=useGlobalContext()
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All transactions</h1>
        <div className="stats-content">
          <div className="chart-content">
            <Chart />
            <div className="amount-content">
              <div className="income">
                <h2>Income</h2>
                <p>
                  {rupee} {totalIncome()}
                </p>  
              </div>           
              <div className="expense">
                <h2>Expense</h2>
                <p>
                  {rupee} {totalExpense()}
                </p>  
              </div>           
              <div className="balance">
                <h2>Balance</h2>
                <p>
                  {rupee} {totalIncome()- totalExpense()}
                </p>  
              </div>           
            </div>
          </div>
          <div className="history-content">
            <History />
            <h2 className='salary-title'>Min <span>Income</span> Max</h2>
            <div className="salary-item">
              <p>
                {Math.min(...incomes.map(item=>item.amount))}
              </p>
              <p>
                {Math.max(...incomes.map(item=>item.amount))}
              </p>
            </div>
            <h2 className='salary-title'>Min <span>Expense</span> Max</h2>
            <div className="salary-item">
              <p>
                {Math.min(...expenses.map(item=>item.amount))}
              </p>
              <p>
                {Math.max(...expenses.map(item=>item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  .stats-content{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-content{
      grid-column: 1/4;
      height: 400px;
    }
    .amount-content{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-top: 2rem;
      .income, .expense{
        grid-column: span 2;

      }
      .income, .expense, .balance{
        background-color: #fcf6f9;
        border: 2px solid white;
        box-shadow: 0 1px 15px rgba(0,0,0,0.06);
        padding: 1rem;
        border-radius: 20px;
      }
      p{
        font-size: 3.5 rem;
        font-weight: 800;
      }
    }
    .balance{
      grid-column: 2/4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        color: var(--color-green);
        opacity: 0.6;
        font-size: 1.5rem;
      }
    }
  }
`

export default Dashboard