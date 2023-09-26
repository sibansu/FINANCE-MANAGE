import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const base = "http://localhost:5000/api/v1/"

const GlobalContext = createContext()

export const GlobalProvider = (({children})=>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async(income)=>{
        const response = await axios.post(`${base}add-income`, income).catch((err)=>{
            setError(err.response.data.message)
        })
    }

    const getIncomes = async(income)=>{
        const response = await axios.get(`${base}get-income`, income)
        setIncomes(response.data)
        console.log(response.data)
    }
    
    const deleteIncome = async(id)=>{
        const res = await axios.delete(`${base}delete-income/${id}`)
    }

    useEffect(()=>{
        getIncomes()
    },[])

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome
        }}>
            {children}
        </GlobalContext.Provider>
    )
})

export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}