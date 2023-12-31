import React from 'react'
import styled from 'styled-components'
import { Cryptocurrency, Fees, Food, Groceries, Grooming, Other, calendar, comment, family, freelance, interests, investments, money, rupee, stocks, trash } from '../Utils/icons'
import Button from './Button/Button'

function Incomeitems({
    id,title, amount, date, category, description, deleteIncome, indicatorColor, type
}) {
    const dateChanged = date.substr(0,10)

    const categoryIcon = ()=>{
        switch(category){
           case 'Salary':
            return money
            case 'Freelancing':
                return freelance 
            case 'Investments':
                return investments
            case 'Stocks':
                return stocks
            case 'Cryptocurrency':
                return Cryptocurrency
            case 'Interests':
                return interests
            case 'Family':
                return family
        }
    }
    const expenseCatIcon = ()=>{
        switch(category){
           case 'Groceries':
            return Groceries
            case 'Grooming':
                return Grooming 
            case 'Investments':
                return investments
            case 'Food':
                return Food
            case 'Fees':
                return Fees
            case 'Gym':
                return interests
            case 'Family':
                return family
            case 'other':
                return Other
        }
    }
    
  return (
    <IncomeStyled indicator={indicatorColor}>
        <div className="icon">
            {type==='expense' ? expenseCatIcon() : categoryIcon()}
        </div>
        <div className="content">
            <h3>{title}</h3>
            <div className="inner">
                <div className="text">
                    <p>{rupee} {amount}</p>
                    <p>{calendar} {dateChanged}</p>
                    <p>
                        {comment}
                        {description}
                    </p>
                </div>
                <div className="btn-container">
                    <Button
                        bPad={'1rem'}
                        bRad={'50%'}
                        icon={trash}
                        bg={'fuchisa'}
                        color={'rgba(34, 34, 96, .6)'}
                        onClick={()=>deleteIncome(id)}
                    ></Button>
                </div>
            </div>
        </div>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    background-color: #FCF6F9;
    border: 2px solid white;
    box-shadow: 0 1px 15px rgba(0,0,0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background-color: #f5f5f5;
        display: flex;
        align-items: center; 
        justify-content: center;
        border: 2px solid white;
        i{
            font-size: 2.5rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h3{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                background: ${props=>props.indicator};
            }
        }
        .inner{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.7;
                }
            }
        }
    }

`

export default Incomeitems