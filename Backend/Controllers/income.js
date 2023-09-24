const IncomeSchema = require("../Models/incomeModel")


const addIncome = async(req, res)=>{
    // console.log(req.body)
    const {title, amount, date, category, description} = req.body

    const income = IncomeSchema({
        title, amount, date, category, description
    })
    console.log(income)
    try {
        //addIncome checks
        if(!title || !amount || !date || !category || !description){
            return res.status(400).json({message: "All fields are mandatory", success:false})
        }
        if(amount<=0 || amount==='number'){
            return res.status(400).json({message: "All fields are mandatory", success:false})
        }
        await income.save()
        res.status(200).json({message:"Income added succesfully", success:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error", success:false})
    }
}

const getIncome = async(req, res)=>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).send(incomes)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Server error"})
    }
}
const deleteIncome = async(req, res)=>{
    try {
        const {id} = req.params;
        IncomeSchema.findByIdAndDelete(id).then((income)=>{
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
module.exports={addIncome, getIncome, deleteIncome}