import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../Context/globalContext';
import axios from 'axios';
import Button from '../Button/Button';
import {plus} from '../../Utils/icons'
function Form_new() {
    const {addIncome, getIncomes, incomes} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }
    var flag =true
    const handleSubmit = async(e) => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input value={title}
                    type="text"
                    name={'title'}
                    placeholder={'Salary title'}
                    onChange={handleInput('title')} 
                />
            </div>
            <div className="input-control">
                <input value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Option</option>
                    <option value="Salary">Salary</option>
                    <option value="Freelancing">Freelancing</option>
                    <option value="Investments">Investiments</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Cryptocurrency">Cryptocurreny</option>
                    <option value="Interests">Interests</option>
                    <option value="Family">Family</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea value={description}
                    name={'description'}
                    placeholder={'Income description'}
                    onChange={handleInput('description')}cols="40" rows="5"></textarea>
            </div>
            
            <div className="submit-btn">
                <Button
                    name={'add income'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    icon={plus}
                    bg={'fuchisa'}
                    color={'white'}
                >

                </Button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: flex;
    /* width: 40%; */
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .2rem .5rem;
        border-radius: 5px;
        border: 2px solid white;
        background: transparent;
        resize: none;
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96. 0.8)
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-end;
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgb(0, 0, 0, 0.06);
            background-color: fuchsia;
            &:hover{
                background: green !important;
            }
        }
    }
`;

export default Form_new