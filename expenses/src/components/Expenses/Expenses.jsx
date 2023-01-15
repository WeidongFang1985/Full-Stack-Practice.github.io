import './Expenses.css';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import {useState} from "react";

const Expenses = () => {
    const [title, setTitle] = useState('Origin');

    const updateTitle = Expense => {
        setTitle(Expense);
    }

    return (
        <div>
            <div>{title}</div>
            <br/>
            <ExpenseItem updateTitle={updateTitle} title='Dinner'/>
        </div>
    );
};

export default Expenses;

