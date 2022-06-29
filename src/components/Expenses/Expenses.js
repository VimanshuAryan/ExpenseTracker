import React, {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
        // console.log(filteredYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent =
    //         filteredExpenses.map((expense) => (
    //         <ExpenseItem 
    //         key = {expense.id}
    //         title = {expense.title}
    //         amount = {expense.amount}
    //         date = {expense.date}
    //         />));
    // }

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected = {filteredYear} 
                onFilterChange = {filterChangeHandler} />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList 
                items = {filteredExpenses}/>            
            {/* {expensesContent} */}
            {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map(expense =>
                <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                />)
            }             */}
        </Card>
    )
}

export default Expenses;