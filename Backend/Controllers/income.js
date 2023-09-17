const IncomeSchema = require("../Models/incomeModel")


const addIncome = async(req, res)=>{
    // console.log(req.body)
    const {title, amount, date, category, description} = req.body

    const income = IncomeSchema({
        title, amount, date, category, description
    })

    console.log(income)
    try {
        if(!title || !amount || !date || !category || !description){
            return res.status(400).json({message: "All fields are mandatory"})
        }
        if(amount<=0 || amount==='number'){
            return res.status(400).json({message: "All fields are mandatory"})
        }
        await income.save()
        res.status(200).json({message:"Income added succesfully"})
    } catch (error) {
        console.log(error)
    }
}

module.exports={addIncome}