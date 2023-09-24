import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../Context/globalContext';
import axios from 'axios';
function Form_new() {
    const {addIncome} = useGlobalContext()
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

    const handleSubmit = async(e) => {
        e.preventDefault()
        addIncome(inputState)
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
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="Cryptocurrency">Cryptocurreny</option>
                    <option value="interests">Interests</option>
                    <option value="Family">Family</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea value={description}
                    name={'description'}
                    placeholder={'Income description'}
                    onChange={handleInput('description')}cols="60" rows="5"></textarea>
            </div>
            <div className="submit-btn">
                <button type='submit'>Submit</button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: flex;
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
`;

export default Form_new