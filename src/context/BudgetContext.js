import React, {  useContext, } from "react"
import { v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()

 export function useBudgets() {
    return useContext(BudgetsContext)
 }

// {
//     id:
//     name:
//     max
// }

// {
//     id:
//     budgetId:
//     amount:
//     description:
// }


export const BudgetsProvider = ({ children}) => {
const [Budgets, setBudgets]= useLocalStorage("budgets", [])
const [expenses, setExpenses] = useLocalStorage("expenses", [])

function getBudgetExpenses(budgetId){
    return expenses.filter(expense => expense.budgetId === budgetId )
}
function addExpense({description, amount, budgetId}) { 
    setExpenses(prevExpenses => {
        return [...prevExpenses, {id: uuidV4(), description, amount, budgetId}]
    })
}

function  addBudget({id, name, max}){
    //uncategorized expenses
    setBudgets(prevBudgets => {
        if(prevBudgets.find(budget => budget.name === name)) {
           return prevBudgets 
        }
        return [...prevBudgets, {id: uuidV4(), name, max}]
    })
}

function deleteBudget({id}) {
    setBudgets(prevBudgets => {
      return prevBudgets.filter(budget => budget.id !== id)
})
}
function deleteExpense({id}) {
    setExpenses(prevExpenses => {
        return prevExpenses.filter(expense => expense.id !== id)
  })
}

     return  <BudgetsContext.Provider value={{
        Budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
     }}>
        {children}
     </BudgetsContext.Provider>
}
export default BudgetsContext;