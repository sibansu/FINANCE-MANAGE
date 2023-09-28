import React from 'react'
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js'
import {useGlobalContext} from '../../Context/globalContext'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

function Chart() {
    const {incomes, expenses}=useGlobalContext()
    const data={
        labels: incomes.map((inc)=>{
            const {date} = inc
            return date.substr(0,10)
        }),
        datasets:[
            {
                label: 'Income',
                data: [
                    ...incomes.map((inc)=>{
                        const {amount} = inc;
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expense ',
                data: [
                    ...expenses.map((inc)=>{
                        const {amount} = inc;
                        return amount
                    })
                ],
                backgroundColor: 'red'
            },
        ]
    }

    return (
    <ChartStyled>
        <Line data={data}></Line>
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    border: 2px solid white;
    background-color: #f6fcf9;
    box-shadow: 0 1px 15px rgba(0,0,0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`

export default Chart