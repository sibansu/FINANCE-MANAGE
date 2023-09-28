const ExpenseSchema = require("../Models/expenseModel")


const addExpense = async(req, res)=>{

    const {title, amount, date, category, description} = req.body

    const income = ExpenseSchema({
        title, amount, date, category, description
    })

    // console.log(income)
    try {
        //addIncome checks
        if(!title || !amount || !date || !category || !description){
            return res.status(400).json({message: "All fields are mandatory"})
        }
        if(amount<=0 || amount==='number'){
            return res.status(400).json({message: "All fields are mandatory"})
        }
        await income.save()
        res.status(200).json({message:"Expense added succesfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}

const getExpense = async(req, res)=>{
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).send(incomes)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Server error"})
    }
}
const deleteExpense = async(req, res)=>{
    try {
        const {id} = req.params;
        ExpenseSchema.findByIdAndDelete(id).then((income)=>{
            res.status(200).json({message:"Selected income deleted succesfully"})
        })
        .catch((err)=>{
            res.status(500).send({messahe:"Server error"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Server error"})
    }
}

module.exports={addExpense,getExpense,deleteExpense}