import React,{useState} from "react";
//Technically the above line is not required, the project will still work.
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const newExpenseHandler = () => {
        setIsEditing(true);
    };

    const cancelHandler = () => {
        setIsEditing(false);
    };

    return <div className="new-expense">
        {!isEditing && <button onClick={newExpenseHandler}>New Expense</button>}
        {isEditing && <ExpenseForm 
            onCancel = {cancelHandler} 
            onSaveExpenseData = {saveExpenseDataHandler} />}
    </div>
}

export default NewExpense;