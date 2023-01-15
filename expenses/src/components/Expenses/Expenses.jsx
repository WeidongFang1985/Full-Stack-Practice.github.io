import './Expense.css';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import {useState} from "react";

const Expense = () => {
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

export default Expense;

