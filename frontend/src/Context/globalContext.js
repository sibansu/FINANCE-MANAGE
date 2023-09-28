import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const base = "http://localhost:5000/api/v1/"

const GlobalContext = createContext()

export const GlobalProvider = (({children})=>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addExpense = async(income)=>{
        const response = await axios.post(`${base}add-expense`, income).catch((err)=>{
            setError(err.response.data.message)
        })
        getIncomes()
    }
    const getExpenses = async(income)=>{
        const response = await axios.get(`${base}get-expense`, income)
        setExpenses(response.data)
        console.log(response.data)
    }
    
    const deleteExpense = async(id)=>{
        const res = await axios.delete(`${base}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpense = ()=>{
        var tot=0;
        expenses.forEach((inc)=>{
            tot=tot+inc.amount
        })
        return tot;
    }
    const addIncome = async(income)=>{
        const response = await axios.post(`${base}add-income`, income).catch((err)=>{
            setError(err.response.data.message)
        })
        getIncomes()
    }

    const getIncomes = async(income)=>{
        const response = await axios.get(`${base}get-income`, income)
        setIncomes(response.data)
        console.log(response.data)
    }
    
    const deleteIncome = async(id)=>{
        const res = await axios.delete(`${base}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = ()=>{
        var tot=0;
        incomes.forEach((inc)=>{
            tot=tot+inc.amount
        })
        return tot;
    }

    useEffect(()=>{
        getIncomes()
        getExpenses()
    },[])
    
    const transactionHistory = ()=>{
        const history = [...incomes, ...expenses]
        history.sort((a, b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history
    }

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            expenses,
            transactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
})


export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}